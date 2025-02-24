import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

async function bootstrap() {
    await AppDataSource.initialize();
    // const user = new User();
    // user.name = "cuizhihui2";
    // user.age = 28;
    // user.nickname = "cuizhihui2";
    // user.phone = "13811111111";
    // user.desc = "this is a test user";
    // user.other = 1.23;


    // const userRepository = AppDataSource.getRepository(User);
    // await userRepository.save(user)

    // console.log("新增用户成功");

    // const saveData = await userRepository.find();
    // console.log("查询用户", saveData);

    // const updateData = await userRepository.findOneBy({
    //     id: 1,
    // });

    // updateData.name = "cuizhihui3";
    // updateData.nickname = "cuizhihui3";
    // updateData.phone = "13811111112";
    // updateData.desc = "this is a test user2";

    // await userRepository.save(updateData);
    // console.log("更新用户成功");

    // const user = await AppDataSource.createQueryBuilder()
    //     .select("user")
    //     .from(User, "user")
    //     .where("user.id = :id", { id: 1 })
    //     .getOne();

    // console.log("查询单个用户", user);


    const user = await AppDataSource.getRepository(User).createQueryBuilder("user")
        .where("user.id = :id", { id: 1 })
        .getOne();
    console.log(user);

}

bootstrap();