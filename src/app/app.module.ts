import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusComponent } from './bus/bus.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { FormsModule } from '@angular/forms';
import { UpdateBusComponent } from './update-bus/update-bus.component';
@NgModule({
  declarations: [
    AppComponent,
    BusComponent,
    AddBusComponent,
    UpdateBusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
