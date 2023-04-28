import { DataSource } from "typeorm";

const dataSource  = new DataSource({
  type: "postgres",
  host: "alugacarDB",
  port: 5432,
  username: "alugaCarADM",
  password: "4lug4c4r",
  database: "alugaCar",
});

dataSource.initialize();