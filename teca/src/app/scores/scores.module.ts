import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreTableComponent } from './components/tables/score-table/score-table.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { ScoresComponent } from './components/scores/scores.component';
import { SharedModule } from '../shared/shared.module';
import { ResponsesComponent } from './components/responses/responses.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResponsesComponent
    ,ScoresComponent
    ,ScoreTableComponent,],
  exports: [
    ResponsesComponent
    ,ScoresComponent
    ,ScoreTableComponent],
  imports: [
    CommonModule
    ,FormsModule
    ,IonicModule
    ,MatTableModule
    ,PipesModule
    ,ReactiveFormsModule
    ,SharedModule
  ]
})
export class ScoresModule { }
