import { Component, OnInit, Input } from '@angular/core';
import { AlertController, NavController} from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import { User } from '../../../models/user';
import { Router } from '@angular/router';
import { NotificationPushService } from '../../../services/notification-push.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() title: string;
  @Input() user: string;
  @Input() password: string;

  

  newUser = new User();

  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private authService: AuthService,
    private route: Router,
    private messagingService: NotificationPushService
  ) { 
   
  }

  ngOnInit() {}

  setEmail(event: any) {
    this.newUser.email = event.target.value;
  }

  setPassword(event: any) {
    this.newUser.password = event.target.value;
  }

  login(){
    
    console.log('Estas en el login Firebase');
    this.authService.login(this.newUser.email, this.newUser.password).then(res => {
     this.userService.getUsuario(localStorage.getItem('token')).subscribe(mycurrentUser => {
        const currentUser = mycurrentUser as User;
        localStorage.setItem('usuario', JSON.stringify(currentUser));
        localStorage.setItem('userType', currentUser.type);
        if (currentUser.type === 'Docente') {
          this.route.navigate(['principal'])
          //this.navCtrl.navigateForward('/principal');
          console.log(localStorage.getItem('usuario'));
        } else {
          this.navCtrl.navigateForward('/principal');
        }

        this.messagingService.requestPermission().subscribe(
          async token => {
            this.userService.setTokenId(token)
          });
      });
    }).catch(err => console.log('Error de Acceso') );
    
  }

  goToRegistro() {
    this.navCtrl.navigateForward('/registro');
  }
}
