import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './iplist/in-memory-data.service';
import { AppRoutingModule } from './app-routing.modules';

import { AppComponent } from './app.component';
import { IplistComponent } from './iplist/iplist.component';
import { IpfilterentryComponent } from './ipfilterentry/ipfilterentry.component';
import { IplistService } from './iplist/iplist.service';

@NgModule({
  declarations: [
    AppComponent,    
    IplistComponent,
    IpfilterentryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [IplistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
