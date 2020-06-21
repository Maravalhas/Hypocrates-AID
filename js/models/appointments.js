export default class AppointmentsModel{

    constructor(){

        this.appoitments = localStorage.appoitments ? JSON.parse(localStorage.appoitments) : []
        this.date = new Date()
    }

    newAppointment(user,doctor,diagnosis,prescriptions){

        const appoitmentName = (`${user},${this.date.getDate()}D-${this.date.getMonth()+1}M-${this.date.getHours()}:${this.date.getMinutes()}H`)
        this.appoitments.push({name: appoitmentName,doctor,diagnosis,prescriptions})
        this._persist()
    }

    getAllAppoitments(){
        return this.appoitments
    }

    _persist(){
        localStorage.appoitments = JSON.stringify(this.appoitments)
    }
}