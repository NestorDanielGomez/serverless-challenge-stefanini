import { IsNumber, IsString, MaxLength, MinLength } from "class-validator"

export class CreateEmployeeDto {

    @IsNumber()
    dni: number

    @IsNumber()
    edad: number

    @IsString()
    @MinLength(3)
    nombre: string

    @IsString()
    @IsString()
    cargo: string
}
