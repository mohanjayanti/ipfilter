import { Injectable }    from '@angular/core';
import { IplistComponent } from './iplist.component';
import { IpfilterentryComponent } from '../ipfilterentry/ipfilterentry.component';
import 'rxjs/add/operator/toPromise';
import { IPs } from './mock-iplist';


@Injectable()
export class IplistService{

constructor(){}

getIplist(): Promise<IpfilterentryComponent[]>{
 return Promise.resolve(IPs);
}
}