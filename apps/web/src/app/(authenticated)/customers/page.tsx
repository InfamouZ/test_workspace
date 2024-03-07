'use client'

import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Typography, Modal, Form, Input, message } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CustomersPage() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [customers, setCustomers] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const customersFound = await Api.Customer.findMany();
      setCustomers(customersFound);
    } catch (error) {
      enqueueSnackbar('Failed to fetch customers', { variant: 'error' });
    }
  };

  const showEditModal = (customer) => {
    setCurrentCustomer(customer);
    form.setFieldsValue(customer);
    setIsModalVisible(true);
  };

  const handleDelete = async (customerId) => {
    try {
      await Api.Customer.deleteOne(customerId);
      enqueueSnackbar('Customer deleted successfully', { variant: 'success' });
      fetchCustomers();
    } catch (error) {
      enqueueSnackbar('Failed to delete customer', { variant: 'error' });
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleSubmit = async (values) => {
    try {
      if (currentCustomer) {
        await Api.Customer.updateOne(currentCustomer.id, values);
        enqueueSnackbar('Customer updated successfully', { variant: 'success' });
      } else {
        await Api.Customer.createOne(values);
        enqueueSnackbar('Customer created successfully', { variant: 'success' });
      }
      setIsModalVisible(false);
      form.resetFields();
      fetchCustomers();
    } catch (error) {
      enqueueSnackbar('Failed to save customer', { variant: 'error' });
    }
  };

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Manage Customers</Title>
      <Text>View and manage customer information.</Text>
      <Button type="primary" icon={<PlusOutlined />} onClick={() => showEditModal(null)}>
        Add Customer
      </Button>
      <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
        {customers?.map((customer) => (
          <Col key={customer.id} span={8}>
            <Card
              title={customer.name}
              actions={[
                <EditOutlined key="edit" onClick={() => showEditModal(customer)} />,
                <DeleteOutlined key="delete" onClick={() => handleDelete(customer.id)} />,
              ]}
            >
              <p>Email: {customer.email}</p>
              <p>Phone: {customer.phone}</p>
              <p>Created: {dayjs(customer.dateCreated).format('DD/MM/YYYY')}</p>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal title="Customer Details" visible={isModalVisible} onCancel={handleCancel} onOk={() => form.submit()}>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input the customer name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please input the customer email!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Phone">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  );
}