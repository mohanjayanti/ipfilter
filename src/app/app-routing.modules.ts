import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FiltersComponent} from './iplist/filters.component';
import {Filter} from './ipfilterentry/filter';
import {FilterDetailComponent} from './filter-detail/filter-detail.component';

const routes: Routes = [
    
    {path:'iplist', component:FiltersComponent},
    {path:'detail/:id', component:FilterDetailComponent}
    
    ];

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
export class AppRoutingModule{


}
