import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Analogy } from 'src/app/activities/models/analogy';
@Component({
  selector: 'app-analogy',
  templateUrl: './analogy.component.html',
  styleUrls: ['./analogy.component.scss'],
})
export class AnalogyComponent implements OnInit {
  @Output() analogyEvent = new EventEmitter();
  activityResponse= new Analogy();
  Analogies = [
    {
      id: 0,
      premise1:"",
      alternative1:"",
      premise2:"",
      alternative2:"",
    }
  ];
  addAnalogie() {
    if (this.isEmpty()===true){
      this.presentAlert();
    }
    else{
      let newItem = {id: this.activityResponse.responses.length, premise1:"", alternative1: "", premise2:"", alternative2: ""};
      //this.Analogies.push(newItem);
      //console.log(this.Analogies);
      console.log('ActivityResponse');
      this.activityResponse.responses.push(newItem);
      console.log(this.activityResponse);
      this.analogyEvent.emit(this.activityResponse);
    }
  }
  constructor(public alertController: AlertController) { }

  ngOnInit() {
    let newItem = {id: this.activityResponse.responses.length, premise1:"", alternative1: "", premise2:"", alternative2: ""};
    this.activityResponse.responses.push(newItem);
  }

  isEmpty(){
    for (let i = 0; i < this.Analogies.length; i++) {
      if( this.activityResponse.responses[i].premise1===""|| this.activityResponse.responses[i].alternative1===""){
        return true;
      }
    }
    return false;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: 'Datos incompletos',
      message: 'Existen datos incompletos en la actividad',
      buttons: ['Aceptar']
    });

    await alert.present();

    //const { role } = await alert.onDidDismiss();
    //console.log('onDidDismiss resolved with role', role);
  }

}
