import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { Chapter } from '../../../../models/chapter';
import { CourseService } from '../../../../services/course.service';
import { Router } from '@angular/router';
import { messagePush } from 'src/app/models/menssagePush';
import { NotificationPushService } from 'src/app/services/notification-push.service';
@Component({
  selector: 'app-create-chapter',
  templateUrl: './create-chapter.component.html',
  styleUrls: ['./create-chapter.component.scss'],
})
export class CreateChapterComponent implements OnInit {
  courseData: any;
  chapterData= new Chapter();
  constructor(private navParams: NavParams
    ,private popoverController: PopoverController
    ,private courseService: CourseService
    ,private messagingService: NotificationPushService
    ,private route: Router) { }

  ngOnInit() {
    this.courseData=this.navParams.get('data');
  }
  setChapterColor(color:string){
    this.chapterData.color=color;
  }
  save(){
    this.getKeysPush()
    this.courseService.createChapter(this.chapterData, this.courseData.courseId);
    this.popoverController.dismiss();
    //this.route.navigate(['/cursos/detalle']);
    this.route.onSameUrlNavigation;
  }

  cancel(){
    this.popoverController.dismiss();
  }


// ****************************Notificacion push ****************************************
sentMsj(keyPush) {
  const mensaje = new messagePush();
  mensaje.to = keyPush
  mensaje.notification.title = "Nuevo Capítulo"
  mensaje.notification.body = "Capitulo: " +this.chapterData.title +" fue agregado a " + this.courseData.subject
  mensaje.data = null
  this.messagingService.setMessges(mensaje)
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
