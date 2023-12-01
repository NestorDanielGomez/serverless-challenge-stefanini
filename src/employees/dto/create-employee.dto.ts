import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsPositive, IsString, MaxLength, MinLength } from "class-validator"

export class CreateEmployeeDto {

    @ApiProperty({ type: "number", description: "DNI", uniqueItems: true })
    @IsNumber()
    dni: number

    @ApiProperty({ type: "number", description: "Edad", minLength: 1 })
    @IsNumber()
    @IsPositive()
    edad: number

    @ApiProperty({ type: "string", description: "Nombre", minLength: 3 })
    @IsString()
    @MinLength(3)
    nombre: string

    @ApiProperty({ type: "string", description: "Cargo", })
    @IsString()
    @IsString()
    cargo: string
}
