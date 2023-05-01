import { DataSource } from "typeorm";
import { Category } from "../modules/cars/entities/Category";

const dataSource  = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "alugaCarADM",
  password: "4lug4c4r",
  database: "alugaCar",
  synchronize: false,
  logging: false,
  entities: [Category],
  migrations: ["./src/database/migrations/*.ts"],
  subscribers: [],
});

export function createConnection(host = "alugacarDB"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default dataSource;