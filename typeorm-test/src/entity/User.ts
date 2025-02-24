import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column()
    age: number;

    @Column({
        length: 100
    })
    nickname: string;

    @Column()
    phone: string

    @Column("text")
    desc: string

    @Column("double")
    other: number
}
