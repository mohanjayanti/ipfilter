import { Injectable }    from '@angular/core';
import { Headers,Http } from '@angular/http';
import { IplistComponent } from './iplist.component';
import { IpfilterentryComponent } from '../ipfilterentry/ipfilterentry.component';
import 'rxjs/add/operator/toPromise';
import { IPs } from './mock-iplist';


@Injectable()
export class IplistService{

private headers = new Headers({'Content-Type':'application/json'});
private serviceUrl = 'api/IplistComponent';
constructor(
    private http: Http
    ){}

getIplist(): Promise<IpfilterentryComponent[]>{
 //return Promise.resolve(IPs);
 return this.http.get(this.serviceUrl).toPromise().then(response => response.json().data as IpfilterentryComponent[]).catch(this.handleError);

}

private handleError(error: any): Promise<any> {
    console.log("error with the calling the service url");
    return Promise.reject(error.message || error);
}
}