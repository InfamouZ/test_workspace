'use client'

import { useEffect, useState } from 'react'
import { Typography, Card, Descriptions, List, Avatar, Grid } from 'antd'
import { DollarCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { useBreakpoint } = Grid
interface Product {
  name?: string;
  description?: string;
  pictureUrl?: string;
}
interface OrderItem {
  quantity: number;
  price: number;
  product?: Product;
}
interface Order {
  customer?: {
    name?: string;
    email?: string;
    phone?: string;
  };
  orderItems?: OrderItem[];
  totalDue?: number;
  date?: string;
}
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ViewOrderPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const { md } = useBreakpoint()

  const [order, setOrder] = useState<Order | null>(null)

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderData = await Api.Order.findOne(params.id, { includes: ['customer', 'orderItems', 'orderItems.product'] })
        setOrder(orderData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch order details', { variant: 'error' })
      }
    }

    if (params.id) {
      fetchOrder()
    }
  }, [params.id])

  return (
    <div style={{ maxWidth: md ? '80%' : '100%', margin: 'auto' }}>
      <Title level={2}>Order Details</Title>
      <Text>This page provides detailed information about a specific order.</Text>
      <Card style={{ marginTop: 20 }}>
        <Descriptions title="Customer Information" bordered>
          <Descriptions.Item label="Name">{order?.customer?.name}</Descriptions.Item>
          <Descriptions.Item label="Email">{order?.customer?.email}</Descriptions.Item>
          <Descriptions.Item label="Phone">{order?.customer?.phone || 'N/A'}</Descriptions.Item>
        </Descriptions>
        <List
          itemLayout="horizontal"
          dataSource={order?.orderItems}
          header={<div><ShoppingCartOutlined /> Order Items</div>}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.product?.pictureUrl || ''} />}
                title={item.product?.name}
                description={item.product?.description}
              />
              <div>Quantity: {item.quantity}</div>
              <div>Price: ${item.price}</div>
            </List.Item>
          )}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
          <Text>Total Due: <DollarCircleOutlined /> {order?.totalDue}</Text>
          <Text>Date: {order?.date ? new Date(order.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }) : ''}</Text>
        </div>
      </Card>
    </div>
  )
}