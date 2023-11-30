import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column("text", { unique: true })
    dni: number

    @Column("number")
    edad: number

    @Column("text")
    nombre: string

    @Column("text")
    cargo: string
}
