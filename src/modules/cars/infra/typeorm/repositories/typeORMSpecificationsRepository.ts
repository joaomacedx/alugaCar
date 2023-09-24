import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { Repository } from "typeorm";
import { Specification } from "../entities/Specification";
import dataSource from "@shared/infra/typeorm";

class SpecificationsRepository implements ISpecificationsRepository {
  private specificationsRepository: Repository<Specification>;
    constructor() {
    this.specificationsRepository = dataSource.getRepository(Specification);
  }

  public async save(specificationToSave: Specification): Promise<void> {
    await this.specificationsRepository.save(specificationToSave);
  }

  public async list(): Promise<Specification[]> {
    const specifications: Specification [] = await this.specificationsRepository.find();
    return specifications;
  }

  public  async findByName(name: string): Promise<Specification> {
    const categoryFound = await this.specificationsRepository.findOne({where: { name }});
    return categoryFound;
  }
}
export { SpecificationsRepository }
