import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './userForm.component';
import { NumberingConfigComponent } from './numberingConfig.component';

const routes: Routes = [{path: '', component: NumberingConfigComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }