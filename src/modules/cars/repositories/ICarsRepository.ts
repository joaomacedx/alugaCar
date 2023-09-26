import { Cars } from "../infra/typeorm/entities/Cars";

interface ICarsRepository {
  findByName(name: string) : Promise<Cars>;
  list(): Promise<Cars[]>;
  save(category: Cars): Promise<void>;
}

export { ICarsRepository }