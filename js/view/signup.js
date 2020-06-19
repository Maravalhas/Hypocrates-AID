import LoginController from '../controller/login.js'

export default class SignupView {

    constructor() {

        this.loginController = new LoginController()
        
        this.signupForm = document.querySelector('#signupForm')
        this.signupUsername = document.querySelector('#signupUsername')
        this.signupPassword = document.querySelector('#signupPassword')
        this.signupConfirmPassword = document.querySelector('#signupConfirmPassword')
        this.bindSignupForm()
    }

    //Prevent form submition
    //Confirm if passwords match / Throw an error if they don't

    bindSignupForm() {

        this.signupForm.addEventListener('submit', event => {
            event.preventDefault();
            if (signupPassword.value == signupConfirmPassword.value)
            {
                this.loginController.validateSignup(this.signupUsername.value , this.signupConfirmPassword.value)
            }
            else
            {
                alert('Passwords do not match!')
            }
        })
    }
}

new SignupView()