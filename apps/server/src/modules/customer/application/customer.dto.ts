import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class CustomerCreateDto {

@IsString()

@IsNotEmpty()
  name: string

@IsString()

@IsNotEmpty()
  email: string

@IsString()

@IsOptional()
  phone?: string

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

export class CustomerUpdateDto {

@IsString()

@IsOptional()
  name?: string

@IsString()

@IsOptional()
  email?: string

@IsString()

@IsOptional()
  phone?: string

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
