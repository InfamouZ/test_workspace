import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class OrderCreateDto {

@IsNumber()

@IsNotEmpty()
  totalDue: number

@IsString()

@IsNotEmpty()
  status: string

@IsString()

@IsNotEmpty()
  date: string

@IsString()

@IsOptional()
  customerId?: string

@IsString()

@IsOptional()
  userId?: string

@IsString()

@IsOptional()
  dateCreated?: string

@IsString()

@IsOptional()
  dateDeleted?: string

@IsString()

@IsOptional()
  dateUpdated?: string

}

export class OrderUpdateDto {

@IsNumber()

@IsOptional()
  totalDue?: number

@IsString()

@IsOptional()
  status?: string

@IsString()

@IsOptional()
  date?: string

@IsString()

@IsOptional()
  customerId?: string

@IsString()

@IsOptional()
  userId?: string

@IsString()

@IsOptional()
  dateCreated?: string

@IsString()

@IsOptional()
  dateDeleted?: string

@IsString()

@IsOptional()
  dateUpdated?: string

}
