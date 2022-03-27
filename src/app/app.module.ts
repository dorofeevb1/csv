import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { AuthService } from '@core/services/auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import { CsvModule } from './modules/csv-save.module';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
const modules = [BrowserModule, BrowserAnimationsModule, AppRoutingModule,MatTreeModule, CsvModule, CommonModule, NgxMatFileInputModule, MatIconModule];

@NgModule({
  declarations: [AppComponent],
  imports: modules ,
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
