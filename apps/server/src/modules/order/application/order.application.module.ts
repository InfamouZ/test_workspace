import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { OrderDomainModule } from '../domain'
import { OrderController } from './order.controller'

import { CustomerDomainModule } from '../../../modules/customer/domain'

import { OrderByCustomerController } from './orderByCustomer.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { OrderByUserController } from './orderByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    OrderDomainModule,

CustomerDomainModule,

UserDomainModule,

],
  controllers: [
    OrderController,
    
    OrderByCustomerController,
    
    OrderByUserController,
    
  ],
  providers: [],
})
export class OrderApplicationModule {}
