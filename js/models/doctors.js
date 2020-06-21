export default class Doctors{

    constructor() {

        this.doctors = localStorage.doctors ? JSON.parse(localStorage.doctors) : []
    }

    getAllDoctors(){

        return this.doctors
    }

    createDoctor(name,age,expertise,lat,lng){

        this.doctors.push({name,age,expertise,lat,lng,appointments:0,rating:0})
        this._persist()
    }

    _persist(){
        localStorage.doctors = JSON.stringify(this.doctors)
    }
    
    setDoctorRating(doctorName,patientRating){

        const selectedDoctor = this.doctors.find(doctor => doctor.name == doctorName)

        let total = selectedDoctor.rating * selectedDoctor.appointments

        total += +patientRating

        selectedDoctor.appointments++

        selectedDoctor.rating = Math.round((total / selectedDoctor.appointments) * 10) / 10

        this._persist()
    }
}

const myDoctors = new Doctors()