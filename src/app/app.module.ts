import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgFor, NgIf, NgSwitch } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIf,
    NgFor,
    FormsModule,
    NgSwitch
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
