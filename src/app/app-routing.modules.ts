import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IplistComponent} from './iplist/iplist.component';
import {IpfilterentryComponent} from './ipfilterentry/ipfilterentry.component';

const routes: Routes = [
    
    {path:'iplist', component:IplistComponent},
    {path:'ipfilterentry', component:IpfilterentryComponent}
    
    ];

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
export class AppRoutingModule{


}
