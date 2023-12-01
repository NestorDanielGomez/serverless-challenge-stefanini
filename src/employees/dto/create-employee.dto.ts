import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsPositive, IsString, MinLength, Max, Min } from "class-validator"

export class CreateEmployeeDto {

    @ApiProperty({ type: "number", uniqueItems: true, description: "DNI (debe tener 8 números)" })
    @IsInt()
    @IsPositive()
    @Min(10000000, { message: "el dni debe tener 8 números" })
    @Max(99999999, { message: "el dni debe tener 8 números" })
    dni: number

    @ApiProperty({ type: "number", description: "Edad (entre 18 y 65)", minLength: 1 })
    @IsInt()
    @Min(18, { message: "Edad (entre 18 y 65)" })
    @Max(65, { message: "Edad (entre 18 y 65)" })
    @IsPositive()
    edad: number

    @ApiProperty({ type: "string", description: "Nombre", minLength: 3 })
    @IsString()
    @MinLength(3)
    nombre: string

    @ApiProperty({ type: "string", description: "Cargo", })
    @IsString()
    @MinLength(3)
    cargo: string
}
