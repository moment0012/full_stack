import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform, Body } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

@Injectable()
export class MyValidationPipe implements PipeTransform<any> {
    async transform(value: any, { metatype }: ArgumentMetadata) {
        // 如果是原生的JavaScript类型，则跳过验证
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        // 否则将普通对象转为类型化对象才能验证
        const object = plainToInstance(metatype, value);
        const errors = await validate(object);
        if (errors.length > 0) {
            throw new BadRequestException("Validation failed");
        }
        return value;

    }

    private toValidate(metatype: Function): boolean {
        // 定义需要验证的类型
        const types: Function[] = [String, Boolean, Number, Array, Object];
        // 如果是数组或者对象，则不进行验证
        return !types.includes(metatype);
    }
}