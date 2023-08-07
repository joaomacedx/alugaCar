import { IUserDTO } from "./IUserDTO";

class UserDTO implements IUserDTO {
    name: string;
    username: string;
    email: string;
    password: string;
    driver_license: string;

    constructor(name: string,
        username: string,
        email: string,
        password: string,
        driver_license: string) {
            this.name = name;
            this.username = username;
            this.email = email;
            this.password = password;
            this.driver_license = driver_license;
    }
}
export { UserDTO }

