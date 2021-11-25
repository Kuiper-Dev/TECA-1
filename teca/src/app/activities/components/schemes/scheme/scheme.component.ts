import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { KeyScheme } from '../../../models/key-scheme';
import { BleedingScheme } from '../../../models/bleeding-scheme';
import { TreeScheme } from '../../../models/tree-scheme';
import {UserService} from '../../../../auth/services/user.service';
@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.scss'],
})
export class SchemeComponent implements OnInit {
  @Input() keywords: any;
  @Input() activity: any;
  @Input() activitySelected: string='';
  response: any;
  visibleKeys=true;
  visibleBleeding=false;
  visibleTree=false;
  constructor(public alertController: AlertController, private userService: UserService,) { }

  ngOnInit() {
    console.log('Este es el cuadro que selecciioné');
    console.log(this.activitySelected);
    this.displayActivity();
  }

  displayActivity(){
    switch(this.activitySelected){
      case 'llaves':{
        this.visibleKeys = true;
        this.visibleBleeding=false;
        this.visibleTree=false;
        break;
      }
      case 'sangrado':{
        this.visibleBleeding=true;
        this.visibleKeys = false;
        this.visibleTree=false;
        break;
      }
      case 'arbol':{
        this.visibleTree=true;
        this.visibleKeys=false;
        this.visibleBleeding = false;
        break;
      }
    }
  }

  saveActivity(){
    console.log(this.response );
    this.presentAlert();
  }

  saveResponse(event: any){
    switch(this.activitySelected){
      case 'llaves':{
        this.response = event as KeyScheme;
       
        break;
      }
      case 'sangrado':{
        this.response = event as BleedingScheme;
     
        break;
      }
      case 'arbol':{
        this.response = event as TreeScheme;
     
        break;
      }
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'custom-alertDanger',
      message: 'Espera mientras es revisado',
      buttons: ['OK']
    });

    await alert.present();
    this.enviarNotificacionP()
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  enviarNotificacionP() {
    var actividad = this.activitySelected
    var id = this.activity["profesorId"]
    var profesor = this.userService.getUsuario(id)
    //var  key = profesr
    
  }
}
