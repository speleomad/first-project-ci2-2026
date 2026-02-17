import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../shared/contact';
import { Subscription } from 'rxjs';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent  implements OnInit, OnDestroy{

  idContact!: number;
  contact: Contact | undefined;
  private routeSub!: Subscription;

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private router:Router){}
 
  ngOnInit(): void {
      /*snapshot method */ 
       this.idContact=this.route.snapshot.params['id'];
       this.contact = this.contactService.getContactById(this.idContact);
      // console.log("contact:"+this.contact?.name);
      /*observable method*/
     /* this.routeSub = this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        if (id) { // Check if 'id' is not null
          this.idContact = +id; // Convert 'id' from string to number
          this.contact = this.contactService.getContactById(this.idContact)
          console.log("contact:"+this.contact?.name);
        }
      });*/
  }
  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();   // Unsubscribe to avoid memory leaks
    }
  }

  goToContacts() {
    this.router.navigate(['/contacts']);
  }
}
