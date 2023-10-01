import { ICarDTO } from '@modules/cars/dto/ICarDTO';
import { ICarFactory } from '@modules/cars/factories/ICarFactory';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateCarUseCase {
  constructor(
    @inject('CarFactory')
    private carFactory: ICarFactory,
    @inject('CarRepository')
    private carRepository: ICarsRepository,
  ) {}
  public async execute(carData: ICarDTO): Promise<void> {

  }
}

export { CreateCarUseCase }