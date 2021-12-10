import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { IonicModule } from '@ionic/angular';
import { NotificationBar } from './components/profile-bar/notifications-bar/notification-bar.component';
import { ProfessorSideBarComponent } from './components/side-bar/professor-side-bar/professor-side-bar.component';
import { StudentSideBarComponent } from './components/side-bar/student-side-bar/student-side-bar.component';

import { ProfessorProfileComponent } from './components/profile-bar/professor-profile/professor-profile.component';
import { StudentProfileComponent } from './components/profile-bar/student-profile/student-profile.component';
import { ProfessorDataComponent } from './components/profile-bar/personal-data/professor-data/professor-data.component';
import { StudentDataComponent } from './components/profile-bar/personal-data/student-data/student-data.component';
import { ReminderComponent } from './components/profile-bar/reminder/reminder.component';
import { ThemeEditorComponent } from './components/theme-editor/theme-editor.component';
import { FormsModule } from '@angular/forms';
import { ThemesViewComponent } from './components/themes-view/themes-view.component';
import { ReflectiveReadingComponent } from './components/reflective-reading/reflective-reading.component';
import { StartActivityComponent } from './components/activity/start-activity/start-activity.component';
import { CreateChartComponent } from './components/activity/create-chart/create-chart.component';
import { KeywordsComponent } from './components/activity/keywords/keywords.component';
import { ActivitiesViewComponent } from './components/activity/activities-view/activities-view.component';




@NgModule({
  declarations: [
    ActivitiesViewComponent
    , BannerComponent
    , CreateChartComponent
    , KeywordsComponent
    ,NotificationBar
    , ProfessorSideBarComponent
    , StudentSideBarComponent
    , ProfessorSideBarComponent
    , ProfessorProfileComponent
    , StartActivityComponent
    , StudentProfileComponent
    , ProfessorDataComponent
    , StudentDataComponent
    , ReflectiveReadingComponent
    , ReminderComponent
    , ThemeEditorComponent

    , ThemesViewComponent],
  exports:[
    ActivitiesViewComponent
    , BannerComponent
    ,NotificationBar
    , CreateChartComponent
    , KeywordsComponent
    , ProfessorSideBarComponent
    , StudentSideBarComponent
    , ProfessorSideBarComponent
    , ProfessorProfileComponent
    , StartActivityComponent
    , StudentProfileComponent
    , ProfessorDataComponent
    , StudentDataComponent

    , ReflectiveReadingComponent
    , ReminderComponent
    , ThemeEditorComponent
    , ThemesViewComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class SharedModule { }
