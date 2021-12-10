import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../../models/user';
@Component({
  selector: 'app-woman-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class WomanAvatarComponent implements OnInit {
  @Input() comando: string;
  @Output() newWomanEvent = new EventEmitter();
  
  newUser = new User();
  
  constructor() { }

  ngOnInit() {}

  selectAvatar(event: any) {
    this.newUser.avatar = event.target.value;
  }

  create() {    
    console.log('esto es lo que tengo guardado del password en local');
    console.log(localStorage.getItem('password'));
    this.newUser.type='Docente';
    this.newUser.password=localStorage.getItem('password');
    localStorage.removeItem('password');
    this.newWomanEvent.emit(this.newUser);
  }

}
