import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "../ICarsRepository";

class InMemoryCarsRepository implements ICarsRepository {
  private carsRepository: Car[] = [];

  public async findByName(name: string): Promise<Car> {
    return this.carsRepository.find((car: Car) =>{
      car.name == name;
    });
  }

  public async list(): Promise<Car[]> {
    return this.carsRepository;
  }

  public async save(car: Car): Promise<void> {
    this.carsRepository.push(car);
  }

  public async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.carsRepository.find((car: Car) => {
      car.license_plate == license_plate;
    });
  }

}
export { InMemoryCarsRepository }