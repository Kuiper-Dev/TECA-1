import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';
import { StudentsService } from '../../../services/students.service';
@Component({
  selector: 'app-groups-table',
  templateUrl: './groups-table.component.html',
  styleUrls: ['./groups-table.component.scss'],
})
export class GroupsTableComponent implements OnInit {
  columns: string[] =['nombre', 'grado', 'email','rendimiento', 'editar'];
  studentsList: any=[];
  @ViewChild(MatTable) tabla1: MatTable<any>;
  constructor(private studentService: StudentsService) { }

  ngOnInit() {
    this.loadStudents();
  }
  selectLevel(event: any){
    
  }

  loadStudents(){
    this.studentService.getMyStudents(localStorage.getItem('token')).then(res=>{
      this.studentsList=res;
    })
  }
  updateRow(cod: number){
    if (confirm("Realmente quiere actualizarlo?")) {
      this.studentsList.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

}
