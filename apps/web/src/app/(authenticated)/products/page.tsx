'use client'

import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Input, InputNumber, Modal, Row, Space, Typography } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ProductsPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const [products, setProducts] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentProduct, setCurrentProduct] = useState(null)
  const [form] = Form.useForm()

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const productsFound = await Api.Product.findMany()
      setProducts(productsFound)
    } catch (error) {
      enqueueSnackbar('Failed to fetch products', { variant: 'error' })
    }
  }

  const showAddModal = () => {
    setCurrentProduct(null)
    form.resetFields()
    setIsModalVisible(true)
  }

  const showEditModal = (product) => {
    setCurrentProduct(product)
    form.setFieldsValue(product)
    setIsModalVisible(true)
  }

  const handleDelete = async (productId) => {
    try {
      await Api.Product.deleteOne(productId)
      enqueueSnackbar('Product deleted successfully', { variant: 'success' })
      fetchProducts()
    } catch (error) {
      enqueueSnackbar('Failed to delete product', { variant: 'error' })
    }
  }

  const handleOk = async () => {
    try {
      const values = await form.validateFields()
      if (currentProduct) {
        await Api.Product.updateOne(currentProduct.id, values)
        enqueueSnackbar('Product updated successfully', { variant: 'success' })
      } else {
        await Api.Product.createOne(values)
        enqueueSnackbar('Product added successfully', { variant: 'success' })
      }
      setIsModalVisible(false)
      fetchProducts()
    } catch (error) {
      enqueueSnackbar('Failed to save product', { variant: 'error' })
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <PageLayout layout="full-width">
      <Title>Products Management</Title>
      <Text>View and manage all products available for order management.</Text>
      <Button type="primary" icon={<PlusOutlined />} onClick={showAddModal} style={{ margin: '20px 0' }}>
        Add New Product
      </Button>
      <Row gutter={[16, 16]}>
        {products?.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card
              title={product.name}
              actions={[
                <EditOutlined key="edit" onClick={() => showEditModal(product)} />,
                <DeleteOutlined key="delete" onClick={() => handleDelete(product.id)} />,
              ]}
            >
              <Text>{product.description}</Text>
              <p>Price: ${product.price}</p>
              <p>Created: {dayjs(product.dateCreated).format('YYYY-MM-DD')}</p>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal title={currentProduct ? 'Edit Product' : 'Add New Product'} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input the product name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="price" label="Price" rules={[{ required: true, message: 'Please input the product price!' }]}>
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}