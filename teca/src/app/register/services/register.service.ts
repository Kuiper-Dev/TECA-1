import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../../models/user';
import { Professor } from '../../models/professor';
import { Student } from '../../models/student';
import { Indicators } from '../../models/indicators';
import { CampaignCourse } from '../interfaces/campaign-course';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private AFauth: AngularFireAuth, private db: AngularFirestore) { }

  private createIndicators(indicators: Indicators){
    this.db.collection('indicators').doc(indicators.professorId).set({
      professorId: indicators.professorId,
      students: indicators.students,
      activities: indicators.activities,
      courses: indicators.courses
    })
  }

  register(user: User){
    return new Promise((resolve, rejected) => {
      this.db.collection('users').doc(user.idUser).set({
        uid:user.idUser,
        name:user.name,
        email: user.email,
        password: user.password,
        type: user.type,
        avatar: user.avatar,
        keyPush: user.keyPush
      }).then(res =>{
        resolve(res);
      }).catch(err => rejected(err));
    });
  }

  createProfessor(professor: Professor){
    return new Promise((resolve, rejected) => {
      this.db.collection('professors').doc(professor._id).set({
        id:professor._id,
        name:professor.nombre,
        gender: professor.sexo,
        date: professor.fechaNacimiento,
        speciality: professor.especialidad,
        email: professor.email,
      }).then(res =>{
        resolve(res);
      }).catch(err => rejected(err));
    });    
  }

  createStudent(student: Student){
    return new Promise((resolve, rejected) => {
      this.db.collection('students').doc(student._id).set({
        id:student._id,
        name:student.name,
        gender: student.gender,
        date: student.date,
        level: student.level,
        highschool: student.highschool,
        email: student.email,
      }).then(res =>{
        const data ={
          studentId: student._id,
          courses: []
        }
        this.db.collection('campaign').doc(student._id).set({
          studentId: data.studentId,
          courses: data.courses
        })
        resolve(res);
      }).catch(err => rejected(err));
    });    
  }

  registerProfessor(professor: Professor, user: User){
    return new Promise((resolve, rejected) =>{
      this.AFauth.createUserWithEmailAndPassword(user.email, user.password).then(res =>{
        professor._id= res.user.uid;
        user.idUser=res.user.uid;
        const indicators = new Indicators();
        indicators.professorId= res.user.uid;
        this.register(user);
        this.createProfessor(professor);
        this.createIndicators(indicators);
        resolve(res);
      }).catch(err => rejected(err));
      this.AFauth.signOut();
    });
  }

  registerStudent(student: Student, user: User){
    return new Promise((resolve, rejected) =>{
      this.AFauth.createUserWithEmailAndPassword(user.email, user.password).then(res =>{
        student._id= res.user.uid;
        user.idUser=res.user.uid;
        this.register(user);
        this.createStudent(student);
        resolve(res);
      }).catch(err => rejected(err));
      this.AFauth.signOut();
    });
  }

  logout() {
    this.AFauth.signOut();
  }
}
