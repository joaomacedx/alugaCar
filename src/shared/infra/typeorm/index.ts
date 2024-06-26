import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import { DataSource } from "typeorm";

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
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
  subscribers: [],
});

export function createConnection(host = "alugacarDB"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default dataSource;
