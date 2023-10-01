import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  findByName(name: string) : Promise<Car>;
  list(): Promise<Car[]>;
  save(category: Car): Promise<void>;
}

export { ICarsRepository }