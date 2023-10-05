import { AppError } from '@errors/AppError';
import { ICarDTO } from '@modules/cars/dto/ICarDTO';
import { ICarFactory } from '@modules/cars/factories/ICarFactory';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { inject, injectable } from 'tsyringe';

// @injectable()
class CreateCarUseCase {
  constructor(
    // @inject('CarFactory')
    private carFactory: ICarFactory,
    // @inject('CarRepository')
    private carRepository: ICarsRepository,
  ) {}
  public async execute(carData: ICarDTO): Promise<void> {
    const carAlreadyExists = await this.carRepository.findByLicensePlate(carData.license_plate);
    if (carAlreadyExists)
      throw new AppError('Car already exists!');
    const newCar = this.carFactory.build(carData);
    await this.carRepository.save(newCar);
  }
}

export { CreateCarUseCase }