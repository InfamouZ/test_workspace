import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationCustomerSubscriber } from './subscribers/notification.customer.subscriber'

import { NotificationProductSubscriber } from './subscribers/notification.product.subscriber'

import { NotificationOrderSubscriber } from './subscribers/notification.order.subscriber'

import { NotificationOrderItemSubscriber } from './subscribers/notification.orderItem.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [

NotificationCustomerSubscriber,

NotificationProductSubscriber,

NotificationOrderSubscriber,

NotificationOrderItemSubscriber,

],
  exports: [],
})
export class NotificationInfrastructureModule {}
