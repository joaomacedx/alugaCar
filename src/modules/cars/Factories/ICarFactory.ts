import { ICarDTO } from "../dto/ICarDTO";
import { Cars } from "../infra/typeorm/entities/Cars";

interface ICarFactory{
  build(dto: ICarDTO): Cars;
}
export { ICarFactory }