import { Repository, getRepository } from "typeorm";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import dataSource from "../../../../dataBase";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = dataSource.getRepository(User);
        
    }
    public async save(userToSave: User): Promise<void> {
        await this.repository.save(userToSave);
    }
    
}
export { UsersRepository }
