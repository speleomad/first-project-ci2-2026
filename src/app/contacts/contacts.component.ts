import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../shared/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {
 contacts!:Contact[];
  constructor(private contactService: ContactService){}
  ngOnInit(): void {
     this.contacts=this.contactService.getAllContact();
  }
  onDeleteContact(id:number){
    this.contactService.deleteContactById(id);
  }

}
