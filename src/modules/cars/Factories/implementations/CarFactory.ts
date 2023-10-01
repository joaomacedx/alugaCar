import { ICarDTO } from "@modules/cars/dto/ICarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarFactory } from "../ICarFactory";

class CarFactory implements ICarFactory {
  build(dto: ICarDTO): Car {
    throw new Error("Method not implemented.");
  }
}

export { CarFactory }