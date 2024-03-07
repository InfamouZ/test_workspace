import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Customer as CustomerModel } from './customer/customer.model'

import { Product as ProductModel } from './product/product.model'

import { Order as OrderModel } from './order/order.model'

import { OrderItem as OrderItemModel } from './orderItem/orderItem.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}
  
  export class User extends UserModel {}
  
  export class Notification extends NotificationModel {}
  
  export class Customer extends CustomerModel {}
  
  export class Product extends ProductModel {}
  
  export class Order extends OrderModel {}
  
  export class OrderItem extends OrderItemModel {}
  
}
