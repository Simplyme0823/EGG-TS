import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class User {

    @PrimaryColumn()
    id: number;

    @Column({ nullable: true, type: 'varchar2', length: 512 })
    firstName: string;

    @Column({ nullable: true, type: 'varchar2', length: 256 })
    lastName: string;

    @Column()
    age: number;

}