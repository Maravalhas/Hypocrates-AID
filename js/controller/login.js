import Users from '../models/users.js'

export default class LoginController {

    constructor() {

        this.users = new Users()
    }

    validateLogin(loginUsername,loginPassword) {

        if(this.users.getAllUsers().some(user => user.username == loginUsername && user.password == loginPassword)){

            this.users.loginUser(loginUsername)
        }
    }

    validateSignup(createUsername,createPassword) {

        if(!this.users.getAllUsers().some(user => user.username == createUsername)){

            this.users.signupUser(createUsername,createPassword)
        }

        else{

            alert("Username already in use!")
        }
    }

}
