'use client'

import React, { useEffect, useState } from 'react';
import { Button, Table, Space, Typography, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function OrderListPage() {
  const router = useRouter();
  const authentication = useAuthentication();
  const userId = authentication.user?.id;
  const { enqueueSnackbar } = useSnackbar();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersFound = await Api.Order.findMany({ includes: ['customer', 'orderItems', 'orderItems.product'] });
        setOrders(ordersFound);
      } catch (error) {
        enqueueSnackbar('Failed to fetch orders', { variant: 'error' });
      }
    };

    if (userId) {
      fetchOrders();
    }
  }, [userId]);

  const deleteOrder = async (orderId: string) => {
    Modal.confirm({
      title: 'Sei sicuro di voler eliminare questo ordine?',
      onOk: async () => {
        try {
          await Api.Order.deleteOne(orderId);
          setOrders(orders.filter(order => order.id !== orderId));
          enqueueSnackbar('Order deleted successfully', { variant: 'success' });
        } catch (error) {
          enqueueSnackbar('Failed to delete order', { variant: 'error' });
        }
      },
    });
  };

  const columns = [
    {
      title: 'Data',
      dataIndex: 'date',
      key: 'date',
      render: (text: string) => dayjs(text).format('YYYY-MM-DD'),
    },
    {
      title: 'Cliente',
      dataIndex: 'customer',
      key: 'customer',
      render: (customer: any) => customer?.name,
    },
    {
      title: 'Totale Dovuto',
      dataIndex: 'totalDue',
      key: 'totalDue',
    },
    {
      title: 'Stato',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Azione',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button icon={<EyeOutlined />} onClick={() => router.push(`/orders/${record.id}`)} />
          <Button icon={<EditOutlined />} onClick={() => router.push(`/orders/${record.id}/edit`)} />
          <Button icon={<DeleteOutlined />} onClick={() => deleteOrder(record.id)} />
        </Space>
      ),
    },
  ];

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Ordini</Title>
      <Text>Qui puoi visualizzare, modificare o eliminare ordini.</Text>
      <Table columns={columns} dataSource={orders} rowKey="id" />
    </PageLayout>
  );
}