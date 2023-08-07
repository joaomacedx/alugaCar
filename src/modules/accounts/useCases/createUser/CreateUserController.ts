import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { UserDTO } from "../../dto/UserDTO"
class CreateUserController {
    public async handle(request: Request, response: Response): Promise<Response> {
        const { name, username, email, password, driver_license } = request.body;
        const dto = new UserDTO(name, username, email, password, driver_license);
        const createUserUseCase = container.resolve(CreateUserUseCase);
        await createUserUseCase.execute(dto);
        return response.status(201).send();
    }
}
export { CreateUserController }
