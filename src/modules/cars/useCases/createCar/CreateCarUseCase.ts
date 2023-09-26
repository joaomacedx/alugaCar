import { ICarFactory } from '@modules/cars/factories/ICarFactory';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { injectable } from 'tsyringe';

@injectable()
class CreateCarUseCase {
  constructor(
    private carFactory: ICarFactory,
    private carRepository: ICarsRepository,
  ) {}
  public async execute(): Promise<void> {

  }
}

export { CreateCarUseCase }