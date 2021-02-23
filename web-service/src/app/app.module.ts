import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatLabel, MatTableModule } from '@angular/material';
import { CbTableComponent } from './cb-table/cb-table.component';
import { CbDialogComponent } from './cb-dialog/cb-dialog.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CbTableComponent,
    CbDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  entryComponents: [CbDialogComponent]
})
export class AppModule { }
