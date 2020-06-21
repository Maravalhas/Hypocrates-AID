import Users from '../models/users.js'

export default class ProfileController{

    constructor(){

        this.modelUsers = new Users()
        this.activeUser = sessionStorage.activeUser
        this.getActiveUserObject = (this.modelUsers.getAllUsers().find(user => user.username == this.activeUser))
    }
    
    changeUserName(newUserName){

        this.getActiveUserObject.username = newUserName
        this.modelUsers._persist()
        this.modelUsers.logout()
        this.modelUsers.loginUser(newUserName)
    }

    changeUserAge(newUserAge){

        this.getActiveUserObject.age = newUserAge
        this.modelUsers._persist()
    }

    changeUserAdress(newUserAdress){

        this.getActiveUserObject.adress = newUserAdress
        this.modelUsers._persist()
    }

    changeUserPassword(activeUserPassword , newUserPassword){

        if (this.getActiveUserObject.password == activeUserPassword)
        {
            this.getActiveUserObject.password = newUserPassword
        }
        else
        {
            alert("Incorrect Password")
        }
        this.modelUsers._persist()
    }

}