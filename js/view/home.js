import Users from '../models/users.js'

export default class HomeView{

    constructor(){

        this.usersModel = new Users()
    
        this.loginButton = document.querySelector('#loginButton')
        this.logoutButton = document.querySelector('#logoutButton')
        this.schedulingButton = document.querySelector('#schedulingButton')
        this.profileButton = document.querySelector('#profileButton')
        this.adminButton = document.querySelector('#adminButton')
        this.leaderboardButton = document.querySelector('#leaderboardButton')

        this.activeUser = sessionStorage.activeUser
        this.getActiveUserObject = (this.usersModel.getAllUsers().find(user => user.username == this.activeUser))
    
        this.checkLogin()
        this.checkStatus()
        this.logout()
    }
    
        checkLogin(){
    
            if(this.usersModel.isLogedIn() && this.getActiveUserObject.type == "admin"){
    
                this.loginButton.style.visibility="hidden"
                this.logoutButton.style.visibility="visible"
                this.schedulingButton.style.visibility="hidden"
                this.profileButton.style.visibility="hidden"
                this.leaderboardButton.style.visibility="visible"
                this.adminButton.style.visibility = "visible"
            }
            else if (this.usersModel.isLogedIn() && this.getActiveUserObject.type != "admin"){

                this.loginButton.style.visibility="hidden"
                this.logoutButton.style.visibility="visible"
                this.schedulingButton.style.visibility="visible"
                this.profileButton.style.visibility="visible"
                this.leaderboardButton.style.visibility="visible"
                this.adminButton.style.visibility = "hidden"
            } 
            else{
    
                this.loginButton.style.visibility="visible"
                this.logoutButton.style.visibility="hidden"
                this.schedulingButton.style.visibility="hidden"
                this.profileButton.style.visibility="hidden"
                this.leaderboardButton.style.visibility="hidden"
                this.adminButton.style.visibility = "hidden"
            }
        }

        checkStatus(){

            if (this.usersModel.isLogedIn() && this.getActiveUserObject.status == "active"){

                window.location.replace('../html/ongoing.html');
            }
        }

        logout(){

            this.logoutButton.addEventListener("click",event=>{
                this.usersModel.logout();
            })
        }
    
}
new HomeView()