'use client'

import React, { useEffect, useState } from 'react';
import { Typography, Card, Descriptions, List, Avatar } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, ShoppingCartOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CustomerDetailsPage() {
  const router = useRouter();
  const params = useParams<any>();
  const { enqueueSnackbar } = useSnackbar();
  const [customer, setCustomer] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const customerData = await Api.Customer.findOne(params.id, { includes: ['orders'] });
        setCustomer(customerData);
      } catch (error) {
        enqueueSnackbar('Failed to fetch customer details', { variant: 'error' });
      } finally {
        setLoading(false);
      }
    };

    fetchCustomer();
  }, [params.id]);

  if (loading) {
    return <PageLayout layout="full-width">Loading...</PageLayout>;
  }

  if (!customer) {
    return <PageLayout layout="full-width">Customer not found</PageLayout>;
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: 'auto' }}>
        <Title level={2}>Customer Details</Title>
        <Card>
          <Descriptions bordered>
            <Descriptions.Item label="Name" span={3}>
              <Text>{customer.name}</Text>
            </Descriptions.Item>
            <Descriptions.Item label="Email" span={3}>
              <MailOutlined /> {customer.email}
            </Descriptions.Item>
            <Descriptions.Item label="Phone" span={3}>
              <PhoneOutlined /> {customer.phone || 'N/A'}
            </Descriptions.Item>
            <Descriptions.Item label="Date Created" span={3}>
              {dayjs(customer.dateCreated).format('DD/MM/YYYY')}
            </Descriptions.Item>
          </Descriptions>
        </Card>
        <Title level={3} style={{ marginTop: '20px' }}>Orders</Title>
        <List
          itemLayout="horizontal"
          dataSource={customer.orders}
          renderItem={(item: any) => (
            <List.Item
              actions={[<a key="list-loadmore-edit" onClick={() => router.push(`/orders/${item.id}`)}>View</a>]}
            >
              <List.Item.Meta
                avatar={<Avatar icon={<ShoppingCartOutlined />} />}
                title={<a onClick={() => router.push(`/orders/${item.id}`)}>{`Order ID: ${item.id}`}</a>}
                description={`Total Due: $${item.totalDue}`}
              />
              <div>Status: {item.status}</div>
            </List.Item>
          )}
        />
      </div>
    </PageLayout>
  );
}