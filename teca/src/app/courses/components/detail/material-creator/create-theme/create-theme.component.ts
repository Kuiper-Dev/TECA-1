import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { CourseService } from '../../../../services/course.service';
import { Theme } from '../../../../models/theme';
import { Router } from '@angular/router';
import { messagePush } from 'src/app/models/menssagePush';
import { NotificationPushService } from 'src/app/services/notification-push.service';
@Component({
  selector: 'app-create-theme',
  templateUrl: './create-theme.component.html',
  styleUrls: ['./create-theme.component.scss'],
})
export class CreateThemeComponent implements OnInit {
  courseData: any;
  ChapterData: any;
  themeData= new Theme();
  constructor(
      private navParams: NavParams
    , private popoverController: PopoverController
    , private courseService: CourseService
    ,private messagingService: NotificationPushService
    , private route: Router) { }

  ngOnInit() {
    this.courseData=this.navParams.get('data');
  }

  save(){
    console.log(this.themeData);
    this.getKeysPush()
    this.route.navigate(['/cursos/tema'], {queryParams:{ theme: JSON.stringify(this.themeData)}});
    this.popoverController.dismiss();
  }

  // ****************************Notificacion push ****************************************
sentMsj(keyPush) {
  const mensaje = new messagePush();
  mensaje.to = keyPush
  mensaje.notification.title = "Nuevo Tema"
  mensaje.notification.body = "El Tema " +
  this.themeData.title +" fue agregado al capitulo " + 
  this.getCapitulo(this.themeData.chapterId) +" del Curso de "+
  this.courseData.subject
  mensaje.data = null
  this.messagingService.setMessges(mensaje)
 }

 getCapitulo(chapterId){
   var data  = this.courseData.chapters.find(i =>
      i.chapterId === chapterId
   )
   return data.title
 }

 getKeysPush(){
  this.courseData.students.forEach(async (estudent)=>{
     this.messagingService.getKeyPushOfuserUid(estudent.studentId).then(key=>{
       this.sentMsj(key) 
     })
  })
}

// ****************************Notificacion push ****************************************

}
