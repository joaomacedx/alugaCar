import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { UserDTO } from "../../dto/implementations/UserDTO"
import { hash } from "bcryptjs";

class CreateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, driver_license } = request.body;
    const passwordHash = await hash(password, 8);
    const dto = new UserDTO(name, email, passwordHash, driver_license);
    const createUserUseCase = container.resolve(CreateUserUseCase);
    await createUserUseCase.execute(dto);
    return response.status(201).send();
  }
}
export { CreateUserController }
