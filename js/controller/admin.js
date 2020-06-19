import Doctors from '../models/doctors.js'

export default class AdminController{

    constructor(){

        this.doctors = new Doctors()
    }

    validateDoctorCreation(name,age,expertise,location){

        if(!this.doctors.some(doctor => doctor.name == name))
        {
            this.doctors.createDoctor(name,age,expertise,location)
        }
        else
        {
            alert("Doctor already Exists")
        }
    }
}