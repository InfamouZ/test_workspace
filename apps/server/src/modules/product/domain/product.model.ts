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

import { OrderItem } from '../../../modules/orderItem/domain'

@Entity()
export class Product {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({})

name: string

@Column({"nullable":true})

description?: string

@ColumnNumeric({"type":"numeric"})

price: number

@OneToMany(
  () => OrderItem,
  child => child.product,
  )

orderItems?: OrderItem[]

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
