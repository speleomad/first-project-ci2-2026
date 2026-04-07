import { Inject, Injectable } from '@angular/core';
import { Contact } from '../shared/contact';
import { CONTACTS } from '../shared/contacts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = CONTACTS;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient,
    @Inject('BaseURL') private baseURL: string,
    private processHTTPMsgService:ProcessHttpmsgService) { }

  /*getAllContact():Contact[]{
    return this.contacts;
  }*/
  getAllContact(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.baseURL + "contacts")
                         .pipe(catchError(this.processHTTPMsgService.handleError));;
  }
  /*getContactById(id:number):Contact|undefined{
    return this.contacts.find(contact=>contact.id==id);
  }*/
  getContactById(id: number): Observable<Contact | undefined> {
    return this.httpClient.get<Contact | undefined>(this.baseURL + "contacts/" + id);
  }

  /* deleteContactById(id:number):void{
     let index= this.contacts.findIndex(contact=>contact.id==id);
     if(index!=-1){
       this.contacts.splice(index,1)
     }
   }*/
  deleteContactById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.baseURL + "contacts/" + id)
  }

   addContactReactiveForms(contact:Contact):Contact{
   contact.id=this.contacts[(this.contacts.length-1)].id+1
   this.contacts.push(contact);
   return contact;
}

  addContact(contact: Contact): Observable<Contact> {
       return this.httpClient.post<Contact>(this.baseURL + "contacts", contact, this.httpOptions);
  }
  updateContact(contact: Contact):Observable<Contact>{
    return this.httpClient.put<Contact>(this.baseURL+"contacts/"+contact.id,contact,this.httpOptions)
  }
}
