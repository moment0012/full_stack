import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsInt({ message: "age必须是数字类型" })
    age: number;

    @IsString({ message: "email必须是字符串类型" })
    email: string;
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}
