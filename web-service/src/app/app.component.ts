import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CbDialogComponent } from './cb-dialog/cb-dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-service';

  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  birthdate: Date;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(CbDialogComponent, {
      width: '450px',
      data: {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone,
        birthdate: this.birthdate
        
      }
    });
  }
}