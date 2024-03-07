'use client'

import React, { useState } from 'react'
import { Button, Form, Input, InputNumber, Typography, Row, Col, Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AddProductPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()
  const [fileList, setFileList] = useState([])

  const handleUpload = async options => {
    const { file } = options
    const url = await Api.Upload.upload(file)
    setFileList(fileList => [...fileList, { url: url, status: 'done' }])
  }

  const onFinish = async (values) => {
    try {
      const productCreated = await Api.Product.createOne({
        ...values,
        imageUrl: fileList.length > 0 ? fileList[0].url : undefined,
      })
      enqueueSnackbar('Prodotto aggiunto con successo', { variant: 'success' })
      router.push('/products')
    } catch (error) {
      enqueueSnackbar('Aggiunta del prodotto non riuscita', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <Title level={2}>Aggiungi prodotto</Title>
          <Paragraph>
            Fill in the details below to add a new product to the inventory.
          </Paragraph>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="name"
              label="Nome del prodotto"
              rules={[{ required: true, message: 'Please input the product name!' }]}
            >
              <Input placeholder="Inserisci il nome del prodotto" />
            </Form.Item>
            <Form.Item
              name="description"
              label="Descrizione"
            >
              <Input.TextArea rows={4} placeholder="Inserisci la descrizione del prodotto" />
            </Form.Item>
            <Form.Item
              name="price"
              label="Prezzo"
              rules={[{ required: true, message: 'Please input the product price!' }]}
            >
              <InputNumber min={0} style={{ width: '100%' }} placeholder="Inserisci il prezzo del prodotto" />
            </Form.Item>
            <Form.Item
              label="Immagine del prodotto"
            >
              <Upload fileList={fileList} customRequest={handleUpload} listType="picture-card" maxCount={1}>
                {fileList.length < 1 && <div><PlusOutlined /><div style={{ marginTop: 8 }}>Carica</div></div>}
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Aggiungi prodotto
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}