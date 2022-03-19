import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {MatTable} from '@angular/material/table';
import { EditStudentComponent } from '../../crud/edit-student/edit-student.component';
import { destroyView } from '@ionic/angular/directives/navigation/stack-utils';
import { StudentsService } from '../../../services/students.service';
@Component({
  selector: 'app-general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.scss'],
})
export class GeneralTableComponent implements OnInit {
  searchtext='';
  columns: string[] =['nombre', 'grado', 'email','rendimiento', 'editar'];
  
  studentsList: any =[];
  @ViewChild(MatTable) tabla1: MatTable<any>;
  constructor(public popoverController: PopoverController, private studentsService:StudentsService) { }

  ngOnInit() {
    this.loadStudents();
  }
  search(event: any){
    this.searchtext=event.detail.value;
    console.log(event.target.value);
  }
  loadStudents(){
    this.studentsService.getMyStudents(localStorage.getItem('token')).then(res=>{
      this.studentsList=res;
    })
  }
  updateRow(cod: number){
    if (confirm("Realmente quiere actualizarlo?")) {
      this.presentPopover('yes');
      //this.studentsList.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: EditStudentComponent,
      cssClass: 'edit-popover-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }


}
