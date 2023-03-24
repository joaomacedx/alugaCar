import { ISpecificationDTO } from "../DataTransferObjects/ISpecificationDTO";
import { SpecificationDTO } from "../DataTransferObjects/SpecificationDTO";
import { Specification } from "../model/Specification";
import { ISpecificationsRepository } from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository{
   private specifications: Specification[];
   
   constructor(){
     this.specifications = [];
   }

   public save(specification: Specification): void {
     this.specifications.push(specification);
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