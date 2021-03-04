import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Contact, ContactNotifier } from './contact';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  private repository = new Subject<ContactNotifier>();

  public notify(contactNotifier: ContactNotifier): void {
    this.repository.next(contactNotifier);
  }

  public listen(): Observable<ContactNotifier> {
    return this.repository.asObservable();
  }
}
