import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { OrderDomainFacade } from '@server/modules/order/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { OrderApplicationEvent } from './order.application.event'
import { OrderCreateDto } from './order.dto'

import { CustomerDomainFacade } from '../../customer/domain'

@Controller('/v1/customers')
export class OrderByCustomerController {
  constructor(
    
    private customerDomainFacade: CustomerDomainFacade,
    
    private orderDomainFacade: OrderDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/customer/:customerId/orders')
  async findManyCustomerId(
    @Param('customerId') customerId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.customerDomainFacade.findOneByIdOrFail(
        customerId,
      )

    const items =
      await this.orderDomainFacade.findManyByCustomer(
        parent,
        queryOptions,
      )

    return items
  }

  @Post('/customer/:customerId/orders')
  async createByCustomerId(
    @Param('customerId') customerId: string,
    @Body() body: OrderCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, customerId }

    const item = await this.orderDomainFacade.create(valuesUpdated)

    await this.eventService.emit<OrderApplicationEvent.OrderCreated.Payload>(
      OrderApplicationEvent
        .OrderCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
