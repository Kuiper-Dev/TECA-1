import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.scss'],
})
export class ScoreTableComponent implements OnInit {
  searchtext='';
  scoresList=[
    {name:'Alfredo Marrero',analogias:100,cuadroCompratativo:100,esquemaArbol:100, esquemaSangrado:95, mnemotecnicas:97, sinonimosAntonimos:100,esquemaLlaves:94,mapaMental:80,mapaConceptual:99}
  , {name:'Nikki Lauda',analogias:85,cuadroCompratativo:100,esquemaArbol:100,esquemaSangrado:95, mnemotecnicas:100, sinonimosAntonimos:100,esquemaLlaves:94,mapaMental:80,mapaConceptual:68}
  , {name:'Valteri Bottas',analogias:100,cuadroCompratativo:80,esquemaArbol:90, esquemaSangrado:95,mnemotecnicas:97, sinonimosAntonimos:100,esquemaLlaves:94,mapaMental:85,mapaConceptual:78}
  , {name:'Charles Le Clerc',analogias:100,cuadroCompratativo:100,esquemaArbol:100, esquemaSangrado:95, mnemotecnicas:97, sinonimosAntonimos:100,esquemaLlaves:94,mapaMental:82,mapaConceptual:45}
  , {name:'Max Verstappen',analogias:100,cuadroCompratativo:100,esquemaArbol:100, esquemaSangrado:100,mnemotecnicas:100, sinonimosAntonimos:100,esquemaLlaves:94,mapaMental:81,mapaConceptual:75}
  , {name:'Fernando Alonso',analogias:100,cuadroCompratativo:100,esquemaArbol:100, esquemaSangrado:100, mnemotecnicas:100, sinonimosAntonimos:100,esquemaLlaves:94,mapaMental:80,mapaConceptual:85}];
  constructor() { }

  ngOnInit() {}
  search(event: any){
    this.searchtext=event.detail.value;
    console.log(event.target.value);
  }
}
