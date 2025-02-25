import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class IdCard {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string

    @Column()
    birthdday: Date;

    @Column()
    email: string;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}