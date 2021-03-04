import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';
import { CbDialogComponent } from '../cb-dialog/cb-dialog.component';
import { Contact } from '../contact';
import { NotifierService } from '../notifier.service';

@Component({
  selector: 'cb-table',
  templateUrl: './cb-table.component.html',
  styleUrls: ['./cb-table.component.scss']
})
export class CbTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'phone', 'birthdate', 'edit', 'delete'];
  contacts: Contact[];
  dataSource = new MatTableDataSource<Contact>();

  constructor(private apiService: ApiService, private notifierService: NotifierService, public dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.apiService.readContacts()
      .subscribe(
        response => {
          this.contacts = response;
          this.dataSource.data = this.contacts;
        },
        error => console.log(error)
      );

    this.notifierService.listen()
      .subscribe(response => {
        const index = this.contacts.findIndex(x => x.id === response.contact.id);
        switch (response.operation) {
          case 'create':
            this.contacts.push(response.contact);
            break;
          case 'update':
            this.contacts[index] = response.contact;
            break;
          case 'delete':
            this.contacts.splice(index, 1);
            break;
        }
        this.dataSource.data = this.contacts;
      });
  }

  editContact(contact: Contact): void {
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
        response => response.forEach(x => this.notifierService.notify({ contact: x, operation: 'delete' })),
        error => console.error(error)
      );
  }
}
