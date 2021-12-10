import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ProfessorFormComponent } from './components/register-form/professor-form/professor-form.component';
import { StudentFormComponent } from './components/register-form/student-form/student-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { FormsModule } from '@angular/forms';
import { AvatarSelectComponent } from './components/avatar-select/avatar-select.component';
import { GirlAvatarComponent } from './components/avatar-select/student-avatar/avatar/avatar.component';
import { ProfessorAvatarComponent } from './components/avatar-select/professor-avatar/professor-avatar.component';
import { StudentAvatarComponent } from './components/avatar-select/student-avatar/student-avatar.component';
import { WomanAvatarComponent } from './components/avatar-select/professor-avatar/avatar/avatar.component';



@NgModule({
  declarations: [
    ProfessorFormComponent
    , StudentFormComponent
    , RegisterFormComponent
    , AvatarSelectComponent

    , GirlAvatarComponent

    , ProfessorAvatarComponent
    , StudentAvatarComponent
    , WomanAvatarComponent],
  exports: [
    ProfessorFormComponent
    , StudentFormComponent
    , RegisterFormComponent
    , AvatarSelectComponent

    , GirlAvatarComponent

    , ProfessorAvatarComponent
    , StudentAvatarComponent
    , WomanAvatarComponent],
  imports: [
      CommonModule
    , IonicModule
    , FormsModule
  ]
})
export class RegisterModule { }
