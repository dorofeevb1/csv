import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { CsvFormComponent } from './components/csv-form/csv-form.component';
import { CsvRoutingModule } from './csv-save-routing.module';
import { MultidimensionalViewComponent } from './components/multidimensional-view/multidimensional-view.component';
import { MatTreeModule } from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
const components = [CsvFormComponent, MultidimensionalViewComponent];

const modules = [CsvRoutingModule, CommonModule,BrowserModule,MatTreeModule,MatIconModule, ];

@NgModule({
  declarations: components,
  imports: modules,
})
export class CsvModule {}