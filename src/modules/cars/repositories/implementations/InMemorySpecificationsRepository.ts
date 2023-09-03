import { ISpecificationDTO } from "../../dto/ISpecificationDTO";
import { SpecificationDTO } from "../../dto/implementations/SpecificationDTO";
import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../ISpecificationsRepositoryInMemory";

class SpecificationsRepository implements ISpecificationsRepository{
  private specifications: Specification[];

  private static INSTANCE: SpecificationsRepository;
  
  constructor(){
    this.specifications = [];
  }

  public save(specification: Specification): void {
    this.specifications.push(specification);
  }

  public static getInstance(): SpecificationsRepository {
    if(!SpecificationsRepository.INSTANCE){
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();     
    }
    return SpecificationsRepository.INSTANCE;
  }

  public list(): ISpecificationDTO[] {
    const list : SpecificationDTO[] = [];
    for (let index = 0; index < this.specifications.length; index++) {
      let element = this.specifications[index];
      let dto = new SpecificationDTO(element.name, element.description);
      list.push(dto);
    }
    return list;
  }

  public findByName(dto: ISpecificationDTO): SpecificationDTO {
    for(let index = 0; index < this.specifications.length; index++) {
      if(this.specifications[index].name === dto.name) {
        return dto;
      }
    }
  }
}
export { SpecificationsRepository }
