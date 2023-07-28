import { Category } from "../entities/Category";

interface ICategoriesRepository{
  findByName(name: string) : Promise<Category>;
  list(): Promise<Category[]>;
  save(category: Category): Promise<void>;
}
export { ICategoriesRepository as ICategoriesRepository }

