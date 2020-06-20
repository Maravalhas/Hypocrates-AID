import Users from '../models/users.js'

const myUsers = new Users()

export default class HomeView{

    constructor(){

        this.myUsers = new Users()
    
        this.loginButton = document.querySelector('#loginButton')
        this.logoutButton = document.querySelector('#logoutButton')
        this.schedulingButton = document.querySelector('#schedulingButton')
        this.profileButton = document.querySelector('#profileButton')
        this.adminButton = document.querySelector('#adminButton')
        this.leaderboardButton = document.querySelector('#leaderboardButton')
    
        this.checkLogin()
        this.checkAdmin()
    }
    
        checkLogin(){
    
            if(this.myUsers.isLogedIn()){
    
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
    
        checkAdmin(){
    
            if(sessionStorage.activeUser.type != "admin")
            {
                this.adminButton.style.visibility="hidden"
            }
            else
            {
                this.adminButton.style.visibility="visible"
            }
        }
}
new HomeView()

const homeView = new HomeView()

homeView.logoutButton.addEventListener("click",event=>{
    homeView.myUsers.logout();
    window.location.replace('../html/home.html');
})