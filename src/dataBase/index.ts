import { DataSource } from "typeorm";

const dataSource  = new DataSource({
  type: "postgres",
  host: "dataBase",
  port: 5432,
  username: "alugaCarDB",
  password: "",
  database: "alugaCar",
});

dataSource.initialize();