import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "employee" })
export class Employee {

    @ApiProperty({ example: "0f673db6-6d26-40c8-9d5d-9a0b009c67a3", description: "Employee ID", uniqueItems: true })
    @PrimaryGeneratedColumn("uuid")
    id: string

    @ApiProperty({ example: 29054384, description: "Dni", uniqueItems: true })
    @Column("int", { unique: true })
    dni: number

    @ApiProperty({ example: 42, description: "Edad", uniqueItems: true })
    @Column('int')
    edad: number

    @ApiProperty({ example: "Nestor", description: "Nombre", uniqueItems: true })
    @Column("text")
    nombre: string

    @ApiProperty({ example: "Empleado", description: "Cargo", uniqueItems: true })
    @Column("text")
    cargo: string
}
