import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Customer } from '../../../modules/customer/domain'

import { User } from '../../../modules/user/domain'

import { OrderItem } from '../../../modules/orderItem/domain'

@Entity()
export class Order {

@PrimaryGeneratedColumn('uuid')

id: string

@ColumnNumeric({"type":"numeric"})

totalDue: number

@Column({})

status: string

@Column({})

date: string

@Column({})

customerId: string

@ManyToOne(
  () => Customer,
  parent => parent.orders,
  )
  @JoinColumn({ name: 'customerId' })

customer?: Customer

@Column({})

userId: string

@ManyToOne(
  () => User,
  parent => parent.orders,
  )
  @JoinColumn({ name: 'userId' })

user?: User

@OneToMany(
  () => OrderItem,
  child => child.order,
  )

orderItems?: OrderItem[]

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
