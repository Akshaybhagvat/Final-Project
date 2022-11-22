import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { BookstatusComponent } from './bookstatus/bookstatus.component';
import { CheckpriceComponent } from './checkprice/checkprice.component';
import { Checkprice1Component } from './checkprice1/checkprice1.component';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: 'add', component:AddComponent},
  {path: 'update', component:UpdateComponent},
  {path: 'bookstatus' , component:BookstatusComponent},
  {path: 'search', component:SearchComponent},
  {path: 'checkprice' , component:CheckpriceComponent},
  {path: 'checkprice1', component:Checkprice1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
