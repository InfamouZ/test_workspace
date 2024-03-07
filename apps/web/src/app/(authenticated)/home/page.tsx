'use client'

import { Divider, Flex, Typography } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const authentication = useAuthentication()
  const userName = authentication.user?.name || 'Utente'

  return (
    <PageLayout layout="super-narrow">
      <Flex align="center" vertical>
        <Title level={1} style={{ marginBottom: 5 }}>
          Benvenuto, {userName} 👋
        </Title>
      </Flex>
    </PageLayout>
  )
}
