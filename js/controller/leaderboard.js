import Doctors from '../models/doctors.js'

export default class Leaderboard{

    constructor(){

        this.doctorsModel = new Doctors()
        this.pLeaderboardTable = document.querySelector('#pLeaderboardTable')

        this.sortLeaderboard()
    }

    sortLeaderboard(){

        var sortHighestRating = this.doctorsModel.doctors.slice(0);

        sortHighestRating.sort(function(a,b) {
            return b.rating - a.rating;
        });
        
        console.log(sortHighestRating)
        
        this.setLeaderboardTable(sortHighestRating)
    }

    setLeaderboardTable(sortHighestRating){

        let result = `<table class="table" id="leaderboardTable"> <thead><tr><th>Doctor</th><th>Age</th><th>Appointments</th><th>Rating</th></thead>`
        
        let repeat = 0

        sortHighestRating.forEach(doctor =>{
            repeat++
            switch (repeat){

                case 1: {   result +=   ` 
                                        <tr class="bg-success">
                                            <td>${doctor.name}</td>
                                            <td>${doctor.age}</td>
                                            <td>${doctor.appointments}</td>
                                            <td>${doctor.rating}</td>
                                        </tr>
                                        `
                            break
                }

                case 2: {   result +=   ` 
                                        <tr class="bg-warning">
                                            <td>${doctor.name}</td>
                                            <td>${doctor.age}</td>
                                            <td>${doctor.appointments}</td>
                                            <td>${doctor.rating}</td>
                                        </tr>
                                        `
                            break
                }

                case 3: {   result +=   ` 
                                        <tr class="bg-danger">
                                            <td>${doctor.name}</td>
                                            <td>${doctor.age}</td>
                                            <td>${doctor.appointments}</td>
                                            <td>${doctor.rating}</td>
                                        </tr>
                                        `
                            break
                }

                default: {   result +=   ` 
                                        <tr>
                                            <td>${doctor.name}</td>
                                            <td>${doctor.age}</td>
                                            <td>${doctor.appointments}</td>
                                            <td>${doctor.rating}</td>
                                        </tr>
                                        `
                            break
                }
            }
        })

        result += `</table>`

        this.pLeaderboardTable.innerHTML = result
    }

}

new Leaderboard()