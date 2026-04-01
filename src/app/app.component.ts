import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
    title = 'first-project';
    isAuth:boolean=true;
    constructor(private authService:AuthService){}
     ngOnInit(): void {
      //Observer
       this.authService.authSubject.subscribe(
        {
          next:(isAuth:boolean)=>{this.isAuth=isAuth},
          error:(error)=>{console.log(error)},
          complete:()=>{console.log("commit")}
        }
       )
      //trigger observable
       this.authService.emitAuthSubject();
    }

}
