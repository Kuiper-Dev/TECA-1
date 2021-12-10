import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { tap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { messagePush } from '../models/menssagePush';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class NotificationPushService {
  token = null;
  key = 'key=AAAAbyX0S0Q:APA91bFSssqv-xP0_q8TvWpmrsPIll29kvrItN82twHm9KfsqiLVtwCNkk2wynQNJ4VttpmUHnJ5bZLarKeXE8ef8cugJU8bogZU3arb8kU9m5QrDNno-Ygwv6JbAVeYfgvLht6K48ns'
  
  constructor(private afMessaging: AngularFireMessaging, private http: HttpClient, private db: AngularFirestore) {
  }
 
  requestPermission() {
    return this.afMessaging.requestToken.pipe();
  }
 
  getMessages() {
    return this.afMessaging.messages;
  }

  deleteToken() {
    if (this.token) {
      this.afMessaging.deleteToken(this.token);
      this.token = null;
    }
  }

  setMessges(MessagePush: messagePush){
    const headers = {'Authorization':this.key}
    this.http.post('https://fcm.googleapis.com/fcm/send',MessagePush,{headers}).toPromise()
  }

   getKeyPushOfuserUid(uid:any){

    return new Promise((resolve,rejected)=>{ 
      this.db.collection('users').doc(uid).get().toPromise().then( res=>{
        const data = res.data() as User;
        resolve(data.keyPush)
      }).catch(err=>rejected(err));
    })
   }

}
