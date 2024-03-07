import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { CustomerDomainModule } from './customer/domain'

import { ProductDomainModule } from './product/domain'

import { OrderDomainModule } from './order/domain'

import { OrderItemDomainModule } from './orderItem/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

CustomerDomainModule,

ProductDomainModule,

OrderDomainModule,

OrderItemDomainModule,

],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
