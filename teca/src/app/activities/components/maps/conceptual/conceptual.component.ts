import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/services/user.service';
import { messagePush } from 'src/app/models/menssagePush';
import { NotificationPushService } from 'src/app/services/notification-push.service';

@Component({
  selector: 'app-conceptual',
  templateUrl: './conceptual.component.html',
  styleUrls: ['./conceptual.component.scss'],
})
export class ConceptualComponent implements OnInit {

  public i = 0;
  MapItems= [ 
    {
      id: 0,
      text: "NODE 1",
    },
    {
      id: 1,
      text: "NODE 2",
    },
    {
      id: 2,
      text: "NODE 3",
    },
    {
      id: 3,
      text: "NODE 4",
    },
  ];
  maxChildren = 6;
  amountOfNodes = 5;
  data = [
    {
      id: "node1",
      parentId: "node0",
      parentPoint: 3,
      childPoint: 1,
      text: "NODO 1",
      color: "#B2BFFF",
      left: 10,
      top: 10,
      children: [ ],
    },
    {
      id: "node2",
      parentId: "node0",
      parentPoint: 5,
      childPoint: 1,
      text: "NODO 2",
      color: "#B2BFFF",
      left: 100,
      top: 10,
      children: [ 
        {
          id: "node3",
          parentId: "node2",
          parentPoint: 3,
          childPoint: 1,
          text: "NODO 3",
          color: "#B2BFFF",
          left: 200,
          top: 10,
          children: [ ],
        },
        {
          id: "node4",
          parentId: "node2",
          parentPoint: 5,
          childPoint: 1,
          text: "NODO 4",
          color: "#B2BFFF",
          left: 300,
          top: 10,
          children: [ ],
        },
      ],
    },
  ];  
  nodes = [
    {
      id: "node1",
    },
    {
      id: "node2",
    },
    {
      id: "node3",
    },
    {
      id: "node4",
    },
  ];

  constructor(private userService: UserService
    ,private messagingService: NotificationPushService){}
  
  ngOnInit() {}

  addNode() {}

  ngAfterViewInit(){
    this.displayAllNodes();
    this.displayLine();
  }
  setItemsPositions(){}
  displayNode(node:any) {
    let nodeItemStyle = "color:"+node.color+";background: "+node.color+"; border-radius: 10px;";
    let nodeLabelStyle = "font-family: Muli;font-style: normal;font-weight: bold;font-size: 12px;line-height: 15px;letter-spacing: 0.01em;color: #FFFFFF;background: "+node.color+";";
    let buttonsStyle = "width: 22px;height: 22px;padding: 0px;--background: #FF9F00;border-radius: 100%;--box-shadow: 0px;margin-left: 5px;margin-top: 5px;";
    let nodeComponentString = '<div style="display: inline-block" cdkDrag><div style="position:absolute;display: inline-block; left: '+node.left+'px; top: '+node.top+'px" cdkDrag><ion-row><ion-item style="'+nodeItemStyle+'" color="'+node.color+'" id="item'+node.id+'"><ion-label style="'+nodeLabelStyle+'">'+node.text+'</ion-label></ion-item></ion-row><ion-row style="justify-content:flex-end;" ><ion-fab-button style="'+buttonsStyle+'"><ion-icon style="width: 16px; height:16px; color:white; padding: 0px;" src="assets/icon/practice/color-change.svg"></ion-icon></ion-fab-button><ion-fab-button style="'+buttonsStyle+'"><ion-icon style="color:white; padding: 0px;font-size: 22px;" name="add"></ion-icon></ion-fab-button></ion-row></div></div>';
    let element = document.getElementById(node.id);
    element.insertAdjacentHTML('beforeend',nodeComponentString);
  }
  displayBranch(children:any){
    children.forEach(node => {
      this.displayNode(node);
      if(node.children.length>0){
        this.displayBranch(node.children)
      }else{
        return ;
      }
    });
  }
  displayAllNodes(){
    this.data.forEach(node => {
      this.displayNode(node);
      if(node.children.length>0){
        this.displayBranch(node.children)
      }else{
        return ;
      }
    });
  }
  displayLine(){

  }
  generateItem(node:any){
  }

  enviarNotificacionP() {
    this.userService.getProfessorID().then(idP=>{
      this.messagingService.getKeyPushOfuserUid(idP).then(key=>{
        this.sentMsj(key) 
      })
    })
  }
  sentMsj(keyPush) {
    const user = JSON.parse(localStorage.getItem('usuario'))
    const mensaje = new messagePush();
    mensaje.to = keyPush
    mensaje.notification.title = "Entregar de atividad"
    mensaje.notification.body = "El estudiante " +
    user.name + " ha realizado la entrega de una actividad "
    mensaje.data = null
    this.messagingService.setMessges(mensaje)
   }
}
