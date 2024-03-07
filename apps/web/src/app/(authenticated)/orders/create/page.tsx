'use client'

import React, { useEffect, useState } from 'react';
import { Button, Form, InputNumber, Select, Typography } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
const { Title, Paragraph } = Typography;
const { Option } = Select;
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CreateOrderPage() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const authentication = useAuthentication();
  const userId = authentication.user?.id;
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchCustomersAndProducts = async () => {
      try {
        const customersFound = await Api.Customer.findMany();
        const productsFound = await Api.Product.findMany();
        setCustomers(customersFound);
        setProducts(productsFound);
      } catch (error) {
        enqueueSnackbar('Failed to fetch data', { variant: 'error' });
      }
    };

    fetchCustomersAndProducts();
  }, []);

  const handleSubmit = async (values) => {
    try {
      const { customerId, products } = values;
      const orderCreated = await Api.Order.createOneByCustomerId(customerId, {
        totalDue: products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
        status: 'Pending',
        date: new Date().toISOString(),
        userId,
      });

      await Promise.all(products.map(product =>
        Api.OrderItem.createOneByOrderId(orderCreated.id, {
          quantity: product.quantity,
          price: product.price,
          productId: product.productId,
        })
      ));

      enqueueSnackbar('Order created successfully', { variant: 'success' });
      router.push('/orders');
    } catch (error) {
      enqueueSnackbar('Failed to create order', { variant: 'error' });
    }
  };

  return (
    <PageLayout layout="full-width">
      <Title>Create New Order</Title>
      <Paragraph>Select products, specify quantities, and assign the order to a customer.</Paragraph>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="customerId" label="Customer" rules={[{ required: true, message: 'Please select a customer!' }]}>
          <Select placeholder="Select a customer">
            {customers?.map(customer => (
              <Option key={customer.id} value={customer.id}>{customer.name}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.List name="products">
          {(fields, { add, remove }) => (
            <>
              {fields.map(field => (
                <Form.Item key={field.key} style={{ marginBottom: 0 }}>
                  <Form.Item {...field} name={[field.name, 'productId']} fieldKey={[field.fieldKey, 'productId']} rules={[{ required: true, message: 'Missing product' }]} style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
                    <Select placeholder="Select a product">
                      {products?.map(product => (
                        <Option key={product.id} value={product.id}>{product.name}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item {...field} name={[field.name, 'quantity']} fieldKey={[field.fieldKey, 'quantity']} rules={[{ required: true, message: 'Missing quantity' }]} style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}>
                    <InputNumber placeholder="Quantity" min={1} />
                  </Form.Item>
                  <Button type="link" onClick={() => remove(field.name)} icon={<MinusCircleOutlined />} />
                </Form.Item>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add product
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">Create Order</Button>
        </Form.Item>
      </Form>
    </PageLayout>
  );
}