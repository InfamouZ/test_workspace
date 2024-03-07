import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { CustomerApi } from './customer/customer.api'

import { ProductApi } from './product/product.api'

import { OrderApi } from './order/order.api'

import { OrderItemApi } from './orderItem/orderItem.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Upload extends UploadApi {}
  
  export class User extends UserApi {}
  
  export class Notification extends NotificationApi {}
  
  export class Customer extends CustomerApi {}
  
  export class Product extends ProductApi {}
  
  export class Order extends OrderApi {}
  
  export class OrderItem extends OrderItemApi {}
  
}
