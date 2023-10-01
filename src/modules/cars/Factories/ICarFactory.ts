import { ICarDTO } from "../dto/ICarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarFactory{
  build(dto: ICarDTO): Car;
}
export { ICarFactory }