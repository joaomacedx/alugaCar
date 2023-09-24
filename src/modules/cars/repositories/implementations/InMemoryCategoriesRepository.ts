import { CategoryDTO } from "../../dto/implementations/CategoryDTO";
import { ICategoryDTO } from "../../dto/ICategoryDTO";
import { Category } from "../../infra/typeorm/entities/Category"; 
import { ICategoriesRepository } from "../ICategoriesRepositoryInMemory";
class CategoriesRepository implements ICategoriesRepository {
  private categories : Category[];
    
  private static INSTANCE: CategoriesRepository;
  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if(!CategoriesRepository.INSTANCE){
      CategoriesRepository.INSTANCE = new CategoriesRepository();     
    }
    return CategoriesRepository.INSTANCE;
  }

  public save(category: Category): void {
    this.categories.push(category);
  }

  public list(): CategoryDTO[] {
    const list : CategoryDTO[] = [];
    for (let index = 0; index < this.categories.length; index++) {
      let element = this.categories[index];
      let dto = new CategoryDTO(element.name, element.description);
      list.push(dto);
    }
    return list;
  }

  public findByName(data: ICategoryDTO): CategoryDTO {
    for(let index = 0; index < this.categories.length; index++) {
      if(this.categories[index].name === data.name) {
        return data;
      }
    }
  }
}
export { CategoriesRepository }
