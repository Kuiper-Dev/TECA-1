import { Component, OnInit, ViewChild } from '@angular/core';
import { Scores } from 'src/app/scores/models/scores';

import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.scss'],
})
export class ScoreTableComponent implements OnInit {
  columnas: string[] = ['nombre','analogias', 'sinonimos', 'cuadros', 'mnemotecnias','llaves','arbol', 'sangrado', 'mental', 'conceptual'];
  searchtext='';
  scoresList:Scores[]=[
    new Scores('','','Alfredo Marrero', 'Logrado', 'Logrado','Logrado', 'Pendiente', 'Pendiente', 'Logrado', 'Pendiente', 'Logrado')
  , new Scores('','','Nikki Lauda','Logrado','Logrado','Logrado','Pendiente','Pendiente','Logrado','Pendiente','No Logrado','Logrado')
  ,new Scores('','','Valteri Bottas','Logrado','Logrado','Logrado','Pendiente','Pendiente','Logrado','Pendiente','No Logrado','Logrado')
  , new Scores('','','Charles Le Clerc','Logrado','Logrado','Logrado', 'Pendiente', 'Pendiente', 'Logrado','Pendiente','No Logrado','Logrado')
  , new Scores('','','Max Verstappen','Logrado','Logrado','Logrado', 'Pendiente', 'Pendiente', 'Logrado','Pendiente','No Logrado','Logrado')
  ,new Scores('','','Fernando Alonso','Logrado','Logrado','Logrado', 'Pendiente', 'Pendiente', 'Logrado','Pendiente','No Logrado','Logrado')];
  @ViewChild(MatTable) tabla1: MatTable<Scores>;
  constructor() { }

  ngOnInit() {}
  search(event: any){
    this.searchtext=event.detail.value;
    console.log(event.target.value);
  }
}
