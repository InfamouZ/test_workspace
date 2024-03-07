

import { OrderItem } from "../orderItem"

export class Product {

id: string

name: string

description?: string

price: number

dateCreated: string

dateDeleted: string

dateUpdated: string

orderItems?: OrderItem[]

}
