import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../../services/campaign.service';
import { Campaign } from '../../models/campaign';
import { User } from '../../../models/user';
import { Course } from 'src/app/courses/models/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign-panel',
  templateUrl: './campaign-panel.component.html',
  styleUrls: ['./campaign-panel.component.scss'],
})
export class CampaignPanelComponent implements OnInit {
  campaignData = new Campaign();
  courseInformation= new Course();
  text='El modo campaña es una sección donde sumarás experiencia al realizar las actividades que la profesora crea y así podrás adquirir conocimiento y avanzar en el ranking semanal.';
  subjects: any[] =[];
  practices: any[] =[
    {
      "name" : "Enfermedades",
    },
    {
      "name" : "Enfermedades",
    }, 
    {
      "name" : "Enfermedades",
    },
    {
      "name" : "Enfermedades",
    }
  ];
  constructor(private campaignService: CampaignService, private route: Router) { 
  }

  ngOnInit() {
    this.getCourses();
  }
  getCourses(){
   this.campaignService.getCampaignCourses(localStorage.getItem('token')).then(res=>{
     this.campaignData = res.data() as Campaign;
     this.subjects= this.campaignData.courses;
     console.log(this.subjects);
     this.getChapters(this.subjects[0].courseId);
   })
  }
  async getChapters(idCourse: string){
    console.log(idCourse);
    this.campaignService.getCampaignChapters(idCourse).then(res=>{
      this.courseInformation= res.data() as unknown as Course;
      
    })
  }
  goToSubthemes(chapterId:string){
    
    this.route.navigate(['/campania/temas'], {queryParams:{ chapter: JSON.stringify(chapterId)}});
  }

}
