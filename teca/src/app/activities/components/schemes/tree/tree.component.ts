import { Component, OnInit } from '@angular/core';
import { TreeResponse } from 'src/app/activities/interfaces/tree-response';
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  mainIdeas=[];
  keySize = "7vh";
  primaryKey = true;
  constructor() { }

  ngOnInit() {}

  addPrincipalIdea(){ 
    this.primaryKey = false;
    const newIdea: TreeResponse={
      id: this.mainIdeas.length+1,
      principalIdea: 'Idea principal',
      leafs: [],
    }
    this.keySize = this.mainIdeas.length >= 2 ? "100%" : 7 + 2 * 4.7 * this.mainIdeas.length + "vh";
    this.mainIdeas.push(newIdea);
  };

  addSecondaryIdea(i: number){
    this.primaryKey = false;
    const newIdeados: TreeResponse={
      id: this.mainIdeas.length+1,
      principalIdea: 'Idea Secundaria',
      leafs: [],
    }
    if (this.mainIdeas[i].leafs.length<2){
      this.mainIdeas[i].leafs.push(newIdeados);
      console.log(this.mainIdeas);
    }
  }
}
