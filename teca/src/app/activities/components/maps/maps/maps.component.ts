import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ConceptualScheme } from 'src/app/activities/models/conceptual-scheme';
import { MindScheme } from 'src/app/activities/models/mind-scheme';
import { UserService } from 'src/app/auth/services/user.service';
import { messagePush } from 'src/app/models/menssagePush';
import { NotificationPushService } from 'src/app/services/notification-push.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {
  @Input() keywords: any;
  @Input() activity: any;
  @Input() activitySelected: string;
  response: any;

  visibleMental = true;
  visibleConseptual = false;

  constructor(public alertController: AlertController
    , private userService: UserService
    ,private messagingService: NotificationPushService) { }

  ngOnInit() {
    this.displayActivity();
  }

  displayActivity() {
     switch (this.activitySelected){
      case 'mental': {
        this.visibleMental = true;
        this.visibleConseptual = false;
        break;
      }
      case 'conceptual': {
        this.visibleMental = false;
        this.visibleConseptual = true;
        break;
      }
    }
  }

  saveActivity(){
    this.presentAlert();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Actividad enviada',
      subHeader: 'Envío exitoso',
      message: 'Actividad enviada a revisión',
      buttons: ['Aceptar']
    });

    await alert.present();
    this.enviarNotificacionP()
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  saveResponse(event: any){
    switch (this.activitySelected){
      case 'mental': {
        this.response = event as MindScheme;
        break;
      }
      case 'conceptual': {
        this.response = event as ConceptualScheme;
        break;
      }
    }
  }


  enviarNotificacionP() {
    this.userService.getProfessorID().then(idP=>{
      this.messagingService.getKeyPushOfuserUid(idP).then(key=>{
        this.sentMsj(key) 
      })
    })
  }
  sentMsj(keyPush) {
    const user = JSON.parse(localStorage.getItem('usuario'))
    const mensaje = new messagePush();
    mensaje.to = keyPush
    mensaje.notification.title = "Entregar de atividad"
    mensaje.notification.body = "El estudiante " +
    user.name + " ha realizado la entrega de una actividad "
    mensaje.data = null
    this.messagingService.setMessges(mensaje)
   }
}
