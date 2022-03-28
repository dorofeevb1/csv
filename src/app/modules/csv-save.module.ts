import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { CsvFormComponent } from './components/csv-form/csv-form.component';
import { CsvRoutingModule } from './csv-save-routing.module';
import { MatTreeModule } from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogComponent } from './components/dialog/mat-dialog/mat-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const components = [CsvFormComponent,MatDialogComponent];

const modules = [CsvRoutingModule, MatInputModule,FormsModule, ReactiveFormsModule, CommonModule,BrowserModule,MatTreeModule,MatIconModule,MatCheckboxModule,MatButtonModule,MatDialogModule ];

@NgModule({
  declarations: components,
  imports: modules,
})
export class CsvModule {}