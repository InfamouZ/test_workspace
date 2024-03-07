'use client'

import { useEffect, useState } from 'react'
import { Button, Form, Input, InputNumber, Typography, Upload } from 'antd'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function EditProductPage() {
  const [form] = Form.useForm()
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [product, setProduct] = useState(null)
  const [fileList, setFileList] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productFound = await Api.Product.findOne(params.id)
        setProduct(productFound)
        form.setFieldsValue({
          name: productFound.name,
          description: productFound.description,
          price: productFound.price,
        })
      } catch (error) {
        enqueueSnackbar('Failed to fetch product details', { variant: 'error' })
      }
    }

    fetchProduct()
  }, [params.id, form])

  const handleUpdate = async (values) => {
    try {
      await Api.Product.updateOne(params.id, values)
      enqueueSnackbar('Product updated successfully', { variant: 'success' })
      router.push('/products')
    } catch (error) {
      enqueueSnackbar('Failed to update product', { variant: 'error' })
    }
  }

  const handleUpload = async (options) => {
    const { file } = options
    const url = await Api.Upload.upload(file)
    setFileList(fileList => [...fileList, { url: url, status: 'done' }])
  }

  return (
    <PageLayout layout="full-width">
      <Title>Edit Product</Title>
      <Text>Edit the details of your product.</Text>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleUpdate}
        initialValues={{
          name: product?.name,
          description: product?.description,
          price: product?.price,
        }}
      >
        <Form.Item
          name="name"
          label="Product Name"
          rules={[{ required: true, message: 'Please input the product name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: 'Please input the price!' }]}
        >
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Product Image">
          <Upload fileList={fileList} customRequest={handleUpload} maxCount={1}>
            <Button>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update Product
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}