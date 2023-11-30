import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "employee" })
export class Employee {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column("text", { unique: true })
    dni: number

    @Column("int")
    edad: number

    @Column("text")
    nombre: string

    @Column("text")
    cargo: string
}
