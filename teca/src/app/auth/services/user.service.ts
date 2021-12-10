import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { studentList } from 'src/app/models/studentList';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  createUser(user: User) {
    this.db.collection('users').doc(user.idUser).set({
      uid: user.idUser,
      email: user.email,
      password: user.password,
      tipo: user.type,
      avatar: user.avatar,
      nombre: user.name,
      keyPush: user.keyPush
    });
    // return this.http.post<TokenResponse>(this.URL_API + '/signup', user).toPromise();
  }

  getUsuario(_id: string) {
    return this.db.collection('users').doc(_id).valueChanges();
  }

  // Aqui creo una funcion para enviar el tokenId 
  setTokenId(token:string){
    console.log(token)
    this.db.collection('users').doc(localStorage.getItem('token')).update({'keyPush':token})
  }

  getProfessorID(){
    return new Promise((resolve,rejected)=>{ 
      this.db.collection('studentList').doc(localStorage.getItem('token')).get().toPromise().then( res=>{
        const data = res.data() as studentList;
        resolve(data.professorId)
      }).catch(err=>rejected(err));
    })
  }
}
