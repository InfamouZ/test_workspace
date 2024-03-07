

import { Order } from "../order"

export class Customer {

id: string

name: string

email: string

phone?: string

dateCreated: string

dateDeleted: string

dateUpdated: string

orders?: Order[]

}
