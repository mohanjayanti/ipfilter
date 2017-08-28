import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './iplist/in-memory-data.service';
import { AppRoutingModule } from './app-routing.modules';
import { RouterModule }   from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { AppComponent } from './app.component';
import { FiltersComponent } from './iplist/filters.component';
import { IplistService } from './iplist/iplist.service';
import { FilterDetailComponent } from './filter-detail/filter-detail.component';

// App Views
import {MainViewModule} from "./views/main-view/main-view.module";
import {MinorViewModule} from "./views/minor-view/minor-view.module";
import {LoginModule} from "./views/login/login.module";
import {RegisterModule} from "./views/register/register.module";

//App Layout
import {LayoutsModule} from "./common/layouts/layouts.module";
import { FilterAddComponent } from './filter-add/filter-add.component';
import { FilterSearchComponent } from './filter-search/filter-search.component';

@NgModule({
  declarations: [
    AppComponent,    
    FiltersComponent,
    FilterDetailComponent,
    FilterAddComponent,
    FilterSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // Views
    MainViewModule,
    MinorViewModule,
    LoginModule,
    RegisterModule,

    // Modules
    LayoutsModule,

    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    
  ],
  providers: [IplistService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
