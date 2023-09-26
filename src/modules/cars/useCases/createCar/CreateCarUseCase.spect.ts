import { CarFactory } from "@modules/cars/factories/implementations/CarFactory";
import { CreateCarUseCase } from "./CreateCarUseCase";
import { InMemoryCarsRepository } from "@modules/cars/repositories/implementations/InMemoryCarsRepository";

let createCarUseCase: CreateCarUseCase;
let carFactory: CarFactory;
let carsRepository: InMemoryCarsRepository;
describe('Create Car', () => {
  beforeEach(() => {
    createCarUseCase = new CreateCarUseCase(CarFactory, carsRepository);
  })
  it('Should be able to create a new car', () => {

  })
});