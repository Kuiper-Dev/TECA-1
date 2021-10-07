import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app'; 
import { Scores } from '../models/scores';
@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private db: AngularFirestore) { }
  createScores(scores: Scores){
    return new Promise((resolve, rejected)=>{
      this.db.collection('scores').doc(scores.studentId).set({
        studentId:scores.studentId,
        professorId:scores.professorId,
        name:scores.name,
        español: scores.espaniol,
        sociales: scores.sociales,
        civica:scores.civica,
        biologia:scores.biologia,
        quimica:scores.quimica,
        fisica:scores.fisica
      }).then(res=>{
        resolve(res);
      }).catch(err=>{rejected(err)});
    });
  }
  getScores(professorId: string){
    return new Promise((resolve,rejected)=>{
      this.db.collection('scores').ref.where('professorId', '==', professorId).get().then(res=>{
        const data: any[] =[];
        res.forEach(doc =>{
          data.push(doc.data() as Scores);        
        });
        resolve(data);
      }).catch(err=>rejected(err));
    });
  }
}
