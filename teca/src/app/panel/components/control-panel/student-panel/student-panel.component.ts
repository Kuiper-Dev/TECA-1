import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.scss'],
})
export class StudentPanelComponent implements OnInit {
  key = "assets/svg/dashboard/maqueta.svg"
  constructor() { }

  ngOnInit() {

    if(localStorage.getItem('TK')) this.key = localStorage.getItem('TK')

  }
  
 
}
