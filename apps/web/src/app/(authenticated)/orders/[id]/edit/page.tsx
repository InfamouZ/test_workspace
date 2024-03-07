'use client'

import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber, Select, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
const { Option } = Select;
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function EditOrderPage() {
  const router = useRouter();
  const params = useParams<any>();
  const { enqueueSnackbar } = useSnackbar();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const fetchedOrder = await Api.Order.findOne(params.id, { includes: ['customer', 'user', 'orderItems'] });
        setOrder(fetchedOrder);
        form.setFieldsValue({
          totalDue: fetchedOrder.totalDue,
          status: fetchedOrder.status,
          date: dayjs(fetchedOrder.date).format('YYYY-MM-DD'),
          customerId: fetchedOrder.customerId,
          userId: fetchedOrder.userId,
        });
      } catch (error) {
        enqueueSnackbar('Failed to fetch order details', { variant: 'error' });
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [params.id, form]);

  const handleFormSubmit = async (values: any) => {
    try {
      await Api.Order.updateOne(params.id, values);
      enqueueSnackbar('Order updated successfully', { variant: 'success' });
      router.push(`/orders/${params.id}`);
    } catch (error) {
      enqueueSnackbar('Failed to update order', { variant: 'error' });
    }
  };

  if (loading) {
    return (
      <PageLayout layout="full-width">
        <LoadingOutlined style={{ fontSize: 24 }} spin />
      </PageLayout>
    );
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Title level={2}>Edit Order</Title>
        <Text>Edit the details of the order.</Text>
        <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
          <Form.Item name="totalDue" label="Total Due" rules={[{ required: true, message: 'Please input the total due!' }]}>
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="status" label="Status" rules={[{ required: true, message: 'Please select the status!' }]}>
            <Select>
              <Option value="pending">Pending</Option>
              <Option value="completed">Completed</Option>
              <Option value="cancelled">Cancelled</Option>
            </Select>
          </Form.Item>
          <Form.Item name="date" label="Date" rules={[{ required: true, message: 'Please input the date!' }]}>
            <Input type="date" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update Order
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  );
}