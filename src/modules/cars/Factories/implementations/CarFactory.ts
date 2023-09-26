import { ICarDTO } from "@modules/cars/dto/ICarDTO";
import { Cars } from "@modules/cars/infra/typeorm/entities/Cars";
import { ICarFactory } from "../ICarFactory";

class CarFactory implements ICarFactory {
  build(dto: ICarDTO): Cars {
    throw new Error("Method not implemented.");
    return new Cars()
  }
}

export { CarFactory }