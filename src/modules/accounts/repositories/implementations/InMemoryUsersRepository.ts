import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class InMemoryUsersRepository implements IUsersRepository {

  private repository: User[] = [];

  constructor() {}

  public async save(data: User): Promise<void> {
    this.repository.push()
  }
  public async findByEmail(email: string): Promise<User> {

    return this.repository.find(
      (user) => 
        user.email === email
    );
  }
  public async findById(id: string): Promise<User> {

    return this.repository.find(
      (user) => 
        user.id === id
    );
  }
}
export { InMemoryUsersRepository } 
