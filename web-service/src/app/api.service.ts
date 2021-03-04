import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  host = `http://192.168.0.222:8080`;
  contactsEndpoint = `${this.host}/contacts`

  constructor(private httpClient: HttpClient) { }

  createContact(contact: Contact): Observable<Contact[]> {
    const parsedBirthdate = new Date(contact.birthdate);
    contact.birthdate = `${parsedBirthdate.getFullYear()}-${parsedBirthdate.getMonth()+1}-${parsedBirthdate.getDate()}`;
    return this.httpClient.post<Contact[]>(this.contactsEndpoint, contact);
  }

  readContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.contactsEndpoint);
  }

  updateContact(id: number, contact: Contact): Observable<Contact[]> {
    const parsedBirthdate = new Date(contact.birthdate);
    contact.birthdate = `${parsedBirthdate.getFullYear()}-${parsedBirthdate.getMonth()+1}-${parsedBirthdate.getDate()}`; 
    return this.httpClient.put<Contact[]>(`${this.contactsEndpoint}/${id}`, contact);
  }

  deleteContact(id: number): Observable<Contact[]> { 
    return this.httpClient.delete<Contact[]>(`${this.contactsEndpoint}/${id}`);
  }
}
