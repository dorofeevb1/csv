import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';  
import { CsvModule } from './modules/csv-save.module';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

const modules = [BrowserModule, MatInputModule, BrowserAnimationsModule, AppRoutingModule,MatTreeModule, CsvModule, CommonModule, MatDialogModule, NgxMatFileInputModule, MatIconModule,MatCheckboxModule,MatButtonModule];

@NgModule({
  declarations: [AppComponent],
  imports: modules ,
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
