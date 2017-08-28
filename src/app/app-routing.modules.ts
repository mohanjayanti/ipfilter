import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FiltersComponent} from './iplist/filters.component';
import {Filter} from './ipfilterentry/filter';
import {FilterDetailComponent} from './filter-detail/filter-detail.component';
import {basicComponent} from './common/layouts/basic.component';
import {mainViewComponent} from './views/main-view/main-view.component';
import {minorViewComponent} from './views/minor-view/minor-view.component';
import {FilterAddComponent} from './filter-add/filter-add.component';
import {FilterSearchComponent} from './filter-search/filter-search.component';

const routes: Routes = [
    {path: '', redirectTo: 'search', pathMatch: 'full'},
    //{path:'iplist', component:FiltersComponent},
   // {path:'detail/:id', component:FilterDetailComponent},
    {
    path: '', component: basicComponent,
    children: [
      {path: 'search', component: FilterSearchComponent},
      {path: 'iplist', component: FiltersComponent},
      {path:'detail/:id', component:FilterDetailComponent},
      {path:'add', component: FilterAddComponent},
      {path:'detail', component:minorViewComponent},
//      {path: 'minorView', component: minorViewComponent}
    ]
  },
    
    ];

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
export class AppRoutingModule{


}
