import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { BookstatusComponent } from './bookstatus/bookstatus.component';
import { SearchComponent } from './search/search.component';
import { CheckpriceComponent } from './checkprice/checkprice.component';
import { Checkprice1Component } from './checkprice1/checkprice1.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent,
    BookstatusComponent,
    SearchComponent,
    CheckpriceComponent,
    Checkprice1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
