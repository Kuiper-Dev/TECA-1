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
        analogias: scores.analogias,
        cuadroCompratativo: scores.cuadroCompratativo,
        esquemaArbol:scores.esquemaArbol,
        esquemaSangrado:scores.esquemaSangrado,
        mnemotecnicas:scores.mnemotecnicas,
        sinonimosAntonimos:scores.sinonimosAntonimos,
        esquemaLlaves:scores.esquemaLlaves,
        mapaMental:scores.mapaMental,
        mapaConceptual:scores.mapaConceptual

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
