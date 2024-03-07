

import { Customer } from "../customer"

import { User } from "../user"

import { OrderItem } from "../orderItem"

export class Order {

id: string

totalDue: number

status: string

date: string

customerId: string

customer?: Customer

userId: string

user?: User

dateCreated: string

dateDeleted: string

dateUpdated: string

orderItems?: OrderItem[]

}
