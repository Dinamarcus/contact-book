import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  contacts = [
    { id: 1, firstname: 'Felix', lastname: 'Steiner', email: 'felix.steiner7@gmail.com', phone: '0699 11311258' }
  ]
  host = `localhost:8080`;
  contactsEndpoint = `${this.host}/contacts`

  constructor(private httpClient: HttpClient) { }

  createContact(contact: Contact) {
    this.httpClient.post<Contact>(this.contactsEndpoint, contact)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

  readContacts() {
    // this.httpClient.get<Contact[]>(this.contactsEndpoint)
    //   .subscribe(
    //     data => console.log(data),
    //     error => console.log(error)
    //   );
    return this.contacts;
  }

  updateContact(id: number, contact: Contact) { 
    this.httpClient.put<Contact>(`${this.contactsEndpoint}/${id}`, contact)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

  deleteContact(id: number) { 
    this.httpClient.delete<Contact>(`${this.contactsEndpoint}/${id}`)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }
}
