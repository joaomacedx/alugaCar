import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { Repository, getRepository } from "typeorm";
import { User } from "../entities/User";
import dataSource from "@shared/infra/typeorm";


class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = dataSource.getRepository(User);
        
  }

  public async save(userToSave: User): Promise<void> {
    await this.repository.save(userToSave);
  }

  public async findByEmail(email: string): Promise<User> {
    const userFound = await this.repository.findOne({
      where: {
        email: email,
      },
    });

    return userFound;
    }

    public async findById(id: string): Promise<User> {
      const userFound = await this.repository.findOne({
        where: {
          id: id,
        },
      });

      return userFound;
    }

}
export { UsersRepository }
