import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { IplistComponent } from './iplist/iplist.component';
import { IpfilterentryComponent } from './ipfilterentry/ipfilterentry.component';

@NgModule({
  declarations: [
    AppComponent,    
    IplistComponent,
    IpfilterentryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
