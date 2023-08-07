import { DataSource } from "typeorm";
import { Category } from "../modules/cars/entities/Category";
import { Specification } from "../modules/cars/entities/Specification";
import { User } from "../modules/accounts/entities/User";

const dataSource  = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "alugaCarADM",
  password: "4lug4c4r",
  database: "alugaCar",
  synchronize: false,
  logging: false,
  entities: [Category, Specification, User],
  migrations: ["./src/database/migrations/*.ts"],
  subscribers: [],
});

export function createConnection(host = "alugacarDB"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default dataSource;
