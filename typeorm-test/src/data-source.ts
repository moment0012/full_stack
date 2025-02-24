import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "boy2829313",
    database: "db_test",
    entities: [User],
    synchronize: true,
    logging: true
});