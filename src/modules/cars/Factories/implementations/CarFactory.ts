import { ICarDTO } from "@modules/cars/dto/ICarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarFactory } from "../ICarFactory";

class CarFactory implements ICarFactory {
  public build(dto: ICarDTO): Car {
    return new Car(
      dto.name,
      dto.description,
      dto.daily_rate,
      dto.license_plate,
      dto.fine_amount,
      dto.brand,
      dto.category_id,
      );
  }
}

export { CarFactory }