import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { Contact } from '../contact';

@Component({
  selector: 'cb-dialog',
  templateUrl: './cb-dialog.component.html',
  styleUrls: ['./cb-dialog.component.scss']
})
export class CbDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CbDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact, private apiService: ApiService) { }

  onSaveClick(): void {
    this.apiService.createContact(this.data)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  isInputInValid(): boolean {
    return this.data.firstname === undefined || this.data.firstname.trim() === '' ||
    this.data.lastname === undefined || this.data.lastname.trim() === '' ||
    this.data.email === undefined || this.data.email.trim() === '' ||
    this.data.phone === undefined || this.data.phone.trim() === '' ||
    this.data.birthdate === undefined;
  }

  ngOnInit() {
  }

}
