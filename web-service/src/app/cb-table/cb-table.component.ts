import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'cb-table',
  templateUrl: './cb-table.component.html',
  styleUrls: ['./cb-table.component.scss']
})
export class CbTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'phone'];
  contacts = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.readContacts().forEach(x => this.contacts.push(x));
  }

}
