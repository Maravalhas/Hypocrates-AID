import AdminController from '../controller/admin.js'

export default class AdminView{

    constructor(){

        this.adminController = new AdminController()

        this.addDoctorForm = document.querySelector("#addDoctorForm")
        this.createDoctorName = document.querySelector("#createDoctorName").value
        this.createDoctorAge = document.querySelector("#createDoctorAge").value
        this.createDoctorExpertise = document.querySelector("#createDoctorExpertise").value
        this.createDoctorLocation = document.querySelector('#createDoctorLocation').value

        this.bindAddDoctorForm()
    }

    bindAddDoctorForm() {

        this.addDoctorForm.addEventListener('submit', event => {

            event.preventDefault();
            this.adminController.validateDoctorCreation(this.createDoctorName,this.createDoctorAge,this.createDoctorExpertise,this.createDoctorLocation)
        })
    }
}

new AdminView()