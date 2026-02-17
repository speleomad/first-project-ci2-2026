import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { Comment } from '../shared/comment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
   info:any;
   newComment:boolean=false;
   comments!:Comment[];
   comment:Comment={id:-1,date:null, message:""};
   

  constructor(private aboutService: AboutService,
              private router: Router){} 
  ngOnInit(): void {
    this.info=this.aboutService.getInfos();
    this.comments=this.aboutService.getAllComment();
  }
   
addComment(){
  console.log("new comment");
  this.aboutService.addComment({
    id:this.comment.id,
    date:this.comment.date,
    message:this.comment.message
  })
  //this.comments.push(this.comment);
 /* this.comments.push({
    date:new Date(),
    message:this.comment.message
  })*/
  //this.newComment=true;
}
  /*   names=["demo1","demo2","demo3"]; */
onContacts(){
  this.router.navigateByUrl("/contacts");
}
}

