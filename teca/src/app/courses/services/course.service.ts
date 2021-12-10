import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { Course } from '../models/course';
import * as firebase from 'firebase/app'; 
import { StudentInfo } from '../../students/models/student-info';
import {map} from 'rxjs/operators';
import { Chapter } from '../models/chapter';
import { ChapterI } from '../interfaces/chapter-i';
import { Theme } from '../models/theme';
import { ThemeI } from '../interfaces/theme-i';
import { CourseStudent } from '../interfaces/course-student';
import { CampaignI } from '../interfaces/campaign-i';
import { Activity } from '../models/activity';
import { ActivityI } from '../interfaces/activity-i';
import { User } from '../../models/user';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
 
  constructor(private AFauth: AngularFireAuth,private db: AngularFirestore) { }
  //Create a new Course
  createCourse(course: Course){
    return new Promise((resolve, rejected)=>{
      course.courseId=this.db.createId();
      this.db.collection('courses').doc(course.courseId).set({
        courseId: course.courseId,
        professorId:course.professorId,
        subject: course.subject,
        chapters:course.chapters,
        students: course.students,
        image: course.image
      }).then(res=>{
        this.db.collection('indicators').doc(course.professorId).update({
          courses: firebase.default.firestore.FieldValue.increment(1)
        });
        
        course.students.forEach(student=>{
          const data: CampaignI={
            courseId:course.courseId,
            subject:course.subject,
          }
          this.db.collection('campaign').doc(student.studentId).update({
            courses: firebase.default.firestore.FieldValue.arrayUnion(data)
          })
        })
        resolve(res);
      }).catch(err=>{rejected(err)});
    });
  }
  //Create a new Chapter
  createChapter(chapter: Chapter, courseId: string){
    return new Promise((resolve, rejected)=>{
      this.AFauth.currentUser.then(res=>{
        chapter.chapterId=this.db.createId();
        this.db.collection('chapters').doc(chapter.chapterId).set({
          chapterId:chapter.chapterId,
          title:chapter.title,
          color:chapter.color,
          themes:chapter.themes
        }).then(chapterCreated=>{
          const data: ChapterI={
            chapterId:chapter.chapterId,
            title:chapter.title,
            color: chapter.color
          }
          this.db.collection('courses').doc(courseId).update({
            chapters: firebase.default.firestore.FieldValue.arrayUnion(data)
          });
          resolve(chapterCreated);
        }).catch(err=>rejected(err));
      });
    });
  }
  //Create a new Theme
  createTheme(theme: Theme){
    return new Promise((resolve, rejected)=>{
      this.AFauth.currentUser.then(res=>{
        theme.themeId=this.db.createId();
        this.db.collection('themes').doc(theme.themeId).set({
          themeId:theme.themeId,
          chapterId:theme.chapterId,
          title:theme.title,
          content:theme.content
        }).then(themeCreated=>{
          const data: ThemeI={
            themeId:theme.themeId,
            title:theme.title,
          }
          this.db.collection('chapters').doc(theme.chapterId).update({
            themes: firebase.default.firestore.FieldValue.arrayUnion(data)
          });
          resolve(themeCreated);
        }).catch(err=>rejected(err));
      });
    });
  }
  //Create a new Activity
  createActivity(activity: Activity){
    return new Promise((resolve, rejected)=>{
      this.AFauth.currentUser.then(res=>{
        activity.activityId=this.db.createId();
        this.db.collection('activities').doc(activity.activityId).set({
          activityId:activity.activityId,
          chapterIdo:activity.chapterId,
          themeId:activity.themeId,
          indications:activity.indications,
          technique:activity.technique,
          professorId: res.uid,
          courseId:activity.courseId
        }).then(activityCreated=>{
          const data: ActivityI={
            activityId:activity.activityId,
            technique:activity.technique,
          }
          this.db.collection('themes').doc(activity.themeId).update({
            //activities: firebase.default.firestore.FieldValue.arrayUnion(data)
            activities: data
          });

          resolve(activityCreated);
        }).catch(err=>rejected(err));
      });
    });
  }
  //Get all courses of the system
  getCourses() {
    return this.db.collection('courses').snapshotChanges().pipe(map(courses=>{
      return courses.map(course=>{
        const data = course.payload.doc.data() as Course;
        data.courseId=course.payload.doc.id;
        return data;
      });
    }));
  }
  //ProfessorCourses (Review this courses)
  getMyCourses(){
    return new Promise((resolve, rejected)=>{
      this.AFauth.currentUser.then(res=>{
        this.db.collection('courses').ref.where('professorId','==', res.uid).get().then(res=>{
          const data: any[] =[];
          res.forEach(doc =>{
            data.push(doc.data() as unknown as Course);
          });
          resolve(data);
        }).catch(err=>rejected(err))
      }).catch();
    });
  }
  //View Real Time courses information
  getProfessorCoursesRT(professorId: string){
  }

  //Get MyStudents --Genrar como servicio general
  getMyStudents(){
    return new Promise((resolve,rejected)=>{
      this.AFauth.currentUser.then(res=>{
        this.db.collection('studentList').ref.where('professorId', '==', res.uid).get().then(res=>{
          const data: any[] =[];
          res.forEach(doc =>{
            data.push(doc.data() as unknown as StudentInfo);        
          });
          resolve(data);
        }).catch(err=>rejected(err));
      }).catch();
    });
  }
  
  async getChapter(chapterId: string){
    return this.db.collection('chapters').doc<Chapter>(chapterId).get().toPromise();
  }
  


  addStudentCourse(students: CourseStudent[], ){
  }

  //Revisar la promesa y su actualización
  
  updateTheme(theme: Theme){
    return new Promise((resolve, rejected)=>{
      this.AFauth.currentUser.then(res=>{
        this.db.collection('themes').doc(theme.themeId).update({
          content:theme.content
        });
        resolve(theme);
      })
    })
  }

}
