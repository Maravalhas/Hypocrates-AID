export default class Users {

    constructor() {

        this.users = localStorage.users ? JSON.parse(localStorage.users) : []
    }

    getAllUsers(){

        return this.users
    }

    loginUser(username)
    {   
        let activeUser = username
        alert(`Loged in as ${activeUser}`)
        window.location.replace('../html/home.html');
    }

    signupUser(username,password){

        this.users.push({username,password})
        this._persist()
        alert("SignedUp Successfully!")
        window.location.replace('../html/login.html');
    }

    removeUser(selectedUsername) {
        this.users = this.users.filter(user => user.username != selectedUsername)
        this._persist()
    }

    _persist(){
        localStorage.users = JSON.stringify(this.users)
    }
    
}

const users = new Users()


