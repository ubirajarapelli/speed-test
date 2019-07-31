import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { DataHistoryComponent } from './data-history/data-history.component';
import { TestSpeedComponent } from './test-speed/test-speed.component';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DataHistoryComponent,
    TestSpeedComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
