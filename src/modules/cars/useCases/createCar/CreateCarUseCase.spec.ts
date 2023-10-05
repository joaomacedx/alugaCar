import { CarFactory } from "@modules/cars/factories/implementations/CarFactory";
import { CreateCarUseCase } from "./CreateCarUseCase";
import { InMemoryCarsRepository } from "@modules/cars/repositories/implementations/InMemoryCarsRepository";
import { CarDTO } from "@modules/cars/dto/implementations/CarDTO";

let createCarUseCase: CreateCarUseCase;
let carFactory: CarFactory;
let carsRepository: InMemoryCarsRepository;
describe('Create Car', () => {
  beforeEach(() => {
    carFactory = new CarFactory();
    carsRepository = new InMemoryCarsRepository();
    createCarUseCase = new CreateCarUseCase(carFactory, carsRepository);
  })
  it('Should be able to create a new car', async () => {
    createCarUseCase.execute(new CarDTO(
      "Fusquinha",
      "De 0 a 100 em 1s",
      100,
      "DEV-2000",
      60,
      "Volks",
      "QUEBRADOFAZ100000ANOS_ID",
    ));
  });
});