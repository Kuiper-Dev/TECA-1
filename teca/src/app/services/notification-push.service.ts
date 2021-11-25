import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NotificationPushService {
  token = null;
  
  constructor(private afMessaging: AngularFireMessaging) {
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
}
