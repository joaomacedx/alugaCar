import { AuthenticateUserDTO } from "../../dto/implementations/AuthenticateUserDTO";
import { UserDTO } from "../../dto/implementations/UserDTO";
import { UserFactory } from "../../factories/implementations/UserFactory";
import { InMemoryUsersRepository } from "../../repositories/implementations/InMemoryUsersRepository";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

describe('Authenticate User', () => {
let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepository: InMemoryUsersRepository;
let createUserUseCase: CreateUserUseCase;
let usersFactory: UserFactory

  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    usersFactory = new UserFactory();
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository);
    createUserUseCase = new CreateUserUseCase(usersRepository, usersFactory);
  });

  it('should be able to authenticate an user', async () => {
    const userData: UserDTO = new UserDTO(
      '12,Som,Testando',
      '12,som,Testando@teste.com',
      'EUestouFazendoMeuTeste',
      '00000000000000000000028922',
    );

    await createUserUseCase.execute(userData);

    const userDataToAuthenticate = new AuthenticateUserDTO(
      userData.email,
      userData.password,
    );
    const result = await authenticateUserUseCase.execute(userDataToAuthenticate);
    console.log(result);
  })
});