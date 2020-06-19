export default class Doctors{

    constructor() {

        this.doctors = localStorage.doctors ? JSON.parse(localStorage.doctors) : []
    }

    getAllDoctors(){

        return this.doctors
    }

    createDoctor(name,age,expertise,lat,lng){

        this.doctors.push({name,age,expertise,lat,lng})
        this._persist()
    }

    _persist(){
        localStorage.doctors = JSON.stringify(this.doctors)
    }
    
}

const myDoctors = new Doctors()