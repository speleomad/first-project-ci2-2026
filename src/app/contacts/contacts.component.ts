import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../shared/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {
 contacts!:Contact[];
  constructor(private contactService: ContactService,
              private router: Router
  ){}
  ngOnInit(): void {
     //this.contacts=this.contactService.getAllContact();
     this.contactService.getAllContact().subscribe(
      {
        next: (contacts:Contact[])=>{this.contacts=contacts},
        error:(error)=>{console.log("error")}
      }
     )
  }
  onDeleteContact(id:number){
   // this.contactService.deleteContactById(id);
   this.contactService.deleteContactById(id).subscribe(
    {
      next: ()=>{console.log("success");
        let index= this.contacts.findIndex(contact=>contact.id==id);
        if(index!=-1){
        this.contacts.splice(index,1)
    }
      },
      error: (error)=>{console.log("failed")}
    }
   )
  }

    onAddContact(){
    this.router.navigateByUrl("/contacts/edit");
  }
    onAddContactReactiveForm(){
    this.router.navigateByUrl("/contacts/edit-reactive-form");
  }

}
