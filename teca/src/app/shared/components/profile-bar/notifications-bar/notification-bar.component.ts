import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../../models/user';
import { ProfileService } from '../../../services/profile.service';
import { Student } from '../../../../models/student';
@Component({
  selector: 'app-NotificationBar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.scss'],
})
export class NotificationBar implements OnInit {

  currentUser = new User();
  currentStudent = new Student();
  constructor(private userService: UserService, private profileService: ProfileService) { }

  ngOnInit() {
    this.getProfileInformantion();
    this.getStudentInformantion();
  }

  getProfileInformantion(){
    this.profileService.getProfileInformation(localStorage.getItem('token')).then(res=>{
      this.currentUser= res.data() as User;
    })
  }

  getStudentInformantion(){
    this.profileService.getStudentInformation(localStorage.getItem('token')).then(res=>{
      this.currentStudent= res.data() as Student;
    })
  }

  logout(){
    this.userService.logout();
  }

}
