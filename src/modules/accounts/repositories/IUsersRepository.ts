import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
    save(data: User): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
}
export { IUsersRepository }
