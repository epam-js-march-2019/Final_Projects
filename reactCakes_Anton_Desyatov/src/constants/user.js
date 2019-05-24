export class User{
    constructor(login,password){
        this.login = login;
        this.password = password;
        this.orders = [];
        this.name = '';
        this.age = '';
        this.phone = '';
        this.address = '';
    }
}