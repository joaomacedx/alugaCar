import { container } from "tsyringe";
import { Request, Response } from 'express';
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { AuthenticateUserDTO } from "../../dto/implementations/AuthenticateUserDTO"

class AuthenticateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);
    const authCredentials = new AuthenticateUserDTO(email, password);
    const token = await authenticateUserUseCase.execute(authCredentials);

    return response.json(token);
  }
}
export { AuthenticateUserController }
