import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", loadChildren:()=>import('./modules/home/home.module').then(m=>m.HomeModule)},
  {path:"finance", loadChildren:()=>import('./modules/finance/finance.module').then(m=>m.FinanceModule)},
  {path:"business-account", loadChildren:()=>import('./modules/business-account/business-account.module').then(m=>m.BusinessAccountModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
