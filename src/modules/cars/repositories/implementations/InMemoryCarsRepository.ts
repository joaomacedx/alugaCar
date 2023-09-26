import { Cars } from "@modules/cars/infra/typeorm/entities/Cars";
import { ICarsRepository } from "../ICarsRepository";

class InMemoryCarsRepository implements ICarsRepository {

  findByName(name: string): Promise<Cars> {
    throw new Error("Method not implemented.");
  }
  list(): Promise<Cars[]> {
    throw new Error("Method not implemented.");
  }
  save(category: Cars): Promise<void> {
    throw new Error("Method not implemented.");
  }

}
export { InMemoryCarsRepository }