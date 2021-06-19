import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivateComponent } from './components/activate/activate.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { ShareComponent } from './components/share/share.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { DetailComponent } from './components/detail/detail.component';
import { ProfessorCourseComponent } from './components/professor-course/professor-course.component';
import { ProfessorActivateComponent } from './components/professor/professor-activate/professor-activate.component';
import { ProfessorShareComponent } from './components/professor/professor-share/professor-share.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { MaterialsComponent } from './components/detail/materials/materials.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CreateChapterComponent } from './components/detail/material-creator/create-chapter/create-chapter.component';
import { CreateThemeComponent } from './components/detail/material-creator/create-theme/create-theme.component';
import { CreateActivityComponent } from './components/detail/material-creator/create-activity/create-activity.component';
import { FormsModule } from '@angular/forms';
import { ProfessorThemesComponent } from './components/professor-themes/professor-themes.component';
import { SubtopicComponent } from './components/subtopic/subtopic.component';




@NgModule({
  declarations: [
      ActivateComponent
    , CreateChapterComponent
    , CreateThemeComponent
    , CreateActivityComponent
    , CourseDetailComponent
    , CourseListComponent
    , DetailComponent
    , MaterialsComponent
    , MyCoursesComponent
    , ProfessorActivateComponent
    , ProfessorCourseComponent
    , ProfessorShareComponent
    , ProfessorThemesComponent
    , ShareComponent
    , SubtopicComponent],
  exports:[
      ActivateComponent
    , CreateChapterComponent
    , CreateThemeComponent
    , CreateActivityComponent
    , CourseDetailComponent
    , CourseListComponent
    , DetailComponent
    , MaterialsComponent
    , MyCoursesComponent
    , ProfessorActivateComponent
    , ProfessorCourseComponent
    , ProfessorShareComponent
    , ProfessorThemesComponent
    , ShareComponent
    , SubtopicComponent],
  imports: [
      CommonModule
    , IonicModule
    , SharedModule
    , FormsModule
  ]
})
export class CoursesModule { }
