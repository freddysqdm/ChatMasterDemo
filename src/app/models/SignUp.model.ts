import { stringify } from 'querystring';

export class SignUp {
    name: string;
    email: string;
    password: string;
    verifiedPassword: string;
    constructor(username: string, email: string, password: string, verifiedPassword: string){
        this.name = username;
        this.email = password;
        this.password = password;
        this.verifiedPassword = verifiedPassword;
    } 
}