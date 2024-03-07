import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { OrderItemDomainModule } from '../domain'
import { OrderItemController } from './orderItem.controller'

import { OrderDomainModule } from '../../../modules/order/domain'

import { OrderItemByOrderController } from './orderItemByOrder.controller'

import { ProductDomainModule } from '../../../modules/product/domain'

import { OrderItemByProductController } from './orderItemByProduct.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    OrderItemDomainModule,

OrderDomainModule,

ProductDomainModule,

],
  controllers: [
    OrderItemController,
    
    OrderItemByOrderController,
    
    OrderItemByProductController,
    
  ],
  providers: [],
})
export class OrderItemApplicationModule {}
