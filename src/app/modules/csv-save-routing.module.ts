import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsvFormComponent } from './components/csv-form/csv-form.component';



const routes: Routes = [
  {
    path: '',
    component: CsvFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CsvRoutingModule {}