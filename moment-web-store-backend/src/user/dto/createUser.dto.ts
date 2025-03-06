
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class CreateUserDto {
    @Column({ type: 'varchar', length: 32, comment: '用户登陆账号' })
    username: string;
    @Column({ type: 'varchar', comment: '用户邮箱', default: '' })
    email: string;

}