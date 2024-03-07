import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { CustomerApplicationModule } from './customer/application'

import { ProductApplicationModule } from './product/application'

import { OrderApplicationModule } from './order/application'

import { OrderItemApplicationModule } from './orderItem/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,

CustomerApplicationModule,

ProductApplicationModule,

OrderApplicationModule,

OrderItemApplicationModule,

],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
