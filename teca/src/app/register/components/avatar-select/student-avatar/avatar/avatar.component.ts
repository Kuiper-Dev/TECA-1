import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../../models/user';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class GirlAvatarComponent implements OnInit {
  @Input() comando: string;
  @Output() newGirlEvent = new EventEmitter();

  newUser = new User();
  
  constructor() { }

  ngOnInit() {}

  selectAvatar(event: any) {
    this.newUser.avatar = event.target.value;
    console.log('Este es mi avatar');
    console.log(this.newUser.avatar);
  }

  create() {
    console.log('esto es lo que tengo guardado del password en local');
    console.log(localStorage.getItem('password'));
    this.newUser.type='Estudiante';
    this.newUser.password=localStorage.getItem('password');
    localStorage.removeItem('password');
    this.newGirlEvent.emit(this.newUser);
  }
}
