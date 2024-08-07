import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessAccountComponent } from './business-account.component';
import { Routes, RouterModule } from '@angular/router';


const routes:Routes=[
  {path:'', component:BusinessAccountComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BusinessAccountModule { }
