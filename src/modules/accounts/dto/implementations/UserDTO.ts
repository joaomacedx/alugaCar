import { IUserDTO } from "../IUserDTO";

class UserDTO implements IUserDTO {
    name: string;
    email: string;
    password: string;
    driver_license: string;

    constructor(name: string,
        email: string,
        password: string,
        driver_license: string) {
            this.name = name;
            this.email = email;
            this.password = password;
            this.driver_license = driver_license;
    }
}
export { UserDTO }

