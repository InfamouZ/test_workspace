import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { OrderItemDomainFacade } from '@server/modules/orderItem/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { OrderItemApplicationEvent } from './orderItem.application.event'
import { OrderItemCreateDto } from './orderItem.dto'

import { ProductDomainFacade } from '../../product/domain'

@Controller('/v1/products')
export class OrderItemByProductController {
  constructor(
    
    private productDomainFacade: ProductDomainFacade,
    
    private orderItemDomainFacade: OrderItemDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/product/:productId/orderItems')
  async findManyProductId(
    @Param('productId') productId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.productDomainFacade.findOneByIdOrFail(
        productId,
      )

    const items =
      await this.orderItemDomainFacade.findManyByProduct(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/product/:productId/orderItems')
  async createByProductId(
    @Param('productId') productId: string,
    @Body() body: OrderItemCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, productId }

    const item = await this.orderItemDomainFacade.create(valuesUpdated)

    await this.eventService.emit<OrderItemApplicationEvent.OrderItemCreated.Payload>(
      OrderItemApplicationEvent
        .OrderItemCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
