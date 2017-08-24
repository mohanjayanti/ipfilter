import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './iplist/in-memory-data.service';
import { AppRoutingModule } from './app-routing.modules';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { FiltersComponent } from './iplist/filters.component';
import { IplistService } from './iplist/iplist.service';
import { FilterDetailComponent } from './filter-detail/filter-detail.component';

// App Views
import {MainViewModule} from "./views/main-view/main-view.module";

//App Layout
import {LayoutsModule} from "./common/layouts/layouts.module";

@NgModule({
  declarations: [
    AppComponent,    
    FiltersComponent,
    FilterDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [IplistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
