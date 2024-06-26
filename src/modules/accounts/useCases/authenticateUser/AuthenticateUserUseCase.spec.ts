import { AppError } from "@errors/AppError";
import { AuthenticateUserDTO } from "../../dto/implementations/AuthenticateUserDTO";
import { UserDTO } from "../../dto/implementations/UserDTO";
import { UserFactory } from "../../factories/implementations/UserFactory";
import { InMemoryUsersRepository } from "../../repositories/implementations/InMemoryUsersRepository";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { hash } from "bcryptjs";

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
    const password = 'EUestouFazendoMeuTeste';    
    const passwordHash = await hash(password, 8);
    const userData: UserDTO = new UserDTO(
      '12,Som,Testando',
      '12,som,Testando@teste.com',
      passwordHash,
      '00000000000000000000028922',
    );
    await createUserUseCase.execute(userData);
    const userDataToAuthenticate = new AuthenticateUserDTO(
      userData.email,
      password,
    );
    const result = await authenticateUserUseCase.execute(userDataToAuthenticate);
    expect(result).toHaveProperty('token');
  });

  it('should not be able to authenticate an nonexistent user', async () => {
      expect(async ()=> {
        await authenticateUserUseCase.execute(
          new AuthenticateUserDTO(
            'nonexistent@email.com',
            'nonexistentUserPassword',
          )
        );
      
      }).rejects.toBeInstanceOf(AppError);
  });  

  it('should not be able to authenticate with incorrect password', async () => {
    expect(async ()=> {
      const password = 'EUestouFazendoMeuTeste';    
      const passwordHash = await hash(password, 8);
      const userData: UserDTO = new UserDTO(
        'USER TO TEST ERROR',
        '12,som,Testando@teste.com',
        passwordHash,
        '40028922',
      );
      await createUserUseCase.execute(userData);
      const userDataToAuthenticate = new AuthenticateUserDTO(
        userData.email,
        'incorrectPassword',
      );
      await authenticateUserUseCase.execute(
        userDataToAuthenticate,
      );
    
    }).rejects.toBeInstanceOf(AppError);
});

});