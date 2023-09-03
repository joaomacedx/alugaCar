import { container } from "tsyringe";
import { CreateCategoryUseCase} from "./CreateCategoryUseCase";
import { Request, Response } from "express";
import { CategoryDTO } from "../../dto/implementations/CategoryDTO";

class CreateCategoryController{
  public handle(request: Request, response: Response): Response {
    const { name, description } = request.body;
    const dto = new CategoryDTO(name, description);
    try{
      const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
      createCategoryUseCase.execute(dto);
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({error: error.message });
    }

  }

}

export { CreateCategoryController }
