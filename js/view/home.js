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
    }
    
        checkLogin(){
    
            if(this.usersModel.isLogedIn()){
    
                this.loginButton.style.visibility="hidden"
                this.logoutButton.style.visibility="visible"
                this.schedulingButton.style.visibility="visible"
                this.profileButton.style.visibility="visible"
                this.leaderboardButton.style.visibility="visible"
            }
    
            else{
    
                this.loginButton.style.visibility="visible"
                this.logoutButton.style.visibility="hidden"
                this.schedulingButton.style.visibility="hidden"
                this.profileButton.style.visibility="hidden"
                this.leaderboardButton.style.visibility="hidden"
            }
        }

        checkStatus(){

            if (this.getActiveUserObject.status == "active"){

                window.location.replace('../html/ongoing.html');
            }
        }
    
}
new HomeView()

const homeView = new HomeView()

homeView.logoutButton.addEventListener("click",event=>{
    homeView.myUsers.logout();
})