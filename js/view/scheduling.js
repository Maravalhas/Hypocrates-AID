import SchedulingController from '../controller/scheduling.js'

export default class SchedulingView{

    constructor(){

      this.schedulingController = new SchedulingController()
      this.bindMap()
    }

    bindMap(){

      this.schedulingController.getCurrentLocation()
    }

    chooseDoctor(){

      
    }
}
const schedulingView = new SchedulingView()

