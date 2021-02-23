import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Contact } from '../contact';

@Component({
  selector: 'cb-dialog',
  templateUrl: './cb-dialog.component.html',
  styleUrls: ['./cb-dialog.component.scss']
})
export class CbDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CbDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
