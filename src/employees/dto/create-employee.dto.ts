import { IsNumber, IsString, MaxLength, MinLength } from "class-validator"

export class CreateEmployeeDto {

    @IsNumber()
    @MinLength(8)
    @MaxLength(8)
    dni: number

    @IsNumber()
    edad: number

    @IsString()
    @MinLength(3)
    nombre: string

    @IsString()
    @IsNumber()
    cargo: string
}
