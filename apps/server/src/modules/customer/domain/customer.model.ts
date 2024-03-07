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

import { Order } from '../../../modules/order/domain'

@Entity()
export class Customer {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({})

name: string

@Column({})

email: string

@Column({"nullable":true})

phone?: string

@OneToMany(
  () => Order,
  child => child.customer,
  )

orders?: Order[]

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
