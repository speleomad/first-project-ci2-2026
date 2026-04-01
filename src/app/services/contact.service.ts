import { Inject, Injectable } from '@angular/core';
import { Contact } from '../shared/contact';
import { CONTACTS } from '../shared/contacts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts:Contact[]=CONTACTS;
  constructor(private httpClient:HttpClient,
              @Inject('BaseURL') private baseURL:string) { }

  /*getAllContact():Contact[]{
    return this.contacts;
  }*/
 getAllContact():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(this.baseURL+"contacts");
  }
  /*getContactById(id:number):Contact|undefined{
    return this.contacts.find(contact=>contact.id==id);
  }*/
  getContactById(id:number):Observable<Contact|undefined>{
    return this.httpClient.get<Contact|undefined>(this.baseURL+"contacts/"+id);
  }
  

 /* deleteContactById(id:number):void{
    let index= this.contacts.findIndex(contact=>contact.id==id);
    if(index!=-1){
      this.contacts.splice(index,1)
    }
  }*/
 deleteContactById(id:number):Observable<void>{
     return this.httpClient.delete<void>(this.baseURL+"contacts/"+id)
  }

    addContact(contact:Contact):Contact{
    contact.id=this.contacts[(this.contacts.length-1)].id+1
    this.contacts.push(contact);
    return contact;
}
}
