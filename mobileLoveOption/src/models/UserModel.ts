import UserModelInterface from "../interfaces/UserModelInterface";

export default class UserModel implements UserModelInterface {

    public id: number|null;
    public email: string;
    public username: string|null;
    public password: string|null;

    public constructor(data: UserModelInterface) {
        this.id = data.id;
        this.email = data.email;
        this.username = data.username;
        this.password = data.password;
    }
}

