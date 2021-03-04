import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { CbDialogComponent } from '../cb-dialog/cb-dialog.component';
import { Contact } from '../contact';

@Component({
  selector: 'cb-table',
  templateUrl: './cb-table.component.html',
  styleUrls: ['./cb-table.component.scss']
})
export class CbTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'phone', 'birthdate', 'edit', 'delete'];
  contacts: Contact[];

  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.apiService.readContacts()
      .subscribe(
        data => { 
          this.contacts = data;
        },
        error => console.log(error)
        );
  }

  editContact(contact: Contact): void {
    console.log(contact);
    this.dialog.open(CbDialogComponent, {
      width: '450px',
      data: {
        id: contact.id,
        firstname: contact.firstname,
        lastname: contact.lastname,
        email: contact.email,
        phone: contact.phone,
        birthdate: contact.birthdate,
        update: true
      }
    });
  }

  deleteContact(contact: Contact): void {
    this.apiService.deleteContact(contact.id)
      .subscribe(
        data => console.log(data), 
        error => console.error(error)
      );
  }
}
