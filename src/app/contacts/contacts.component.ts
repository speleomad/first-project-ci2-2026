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
     this.contacts=this.contactService.getAllContact();
  }
  onDeleteContact(id:number){
    this.contactService.deleteContactById(id);
  }

    onAddContact(){
    this.router.navigateByUrl("/contacts/edit");
  }

}
