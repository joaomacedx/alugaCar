import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  findByName(name: string) : Promise<Car>;
  list(): Promise<Car[]>;
  save(category: Car): Promise<void>;
  findByLicensePlate(license_plate: string): Promise<Car>;
}

export { ICarsRepository }