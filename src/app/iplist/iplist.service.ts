import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { FiltersComponent } from './filters.component';
import { Filter } from '../ipfilterentry/filter';
import 'rxjs/add/operator/toPromise';
import { IPs } from './mock-iplist';


@Injectable()
export class IplistService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serviceUrl = 'api/iplists';
    constructor(
        private http: Http
    ) { }

    getIplist(): Promise<Filter[]> {
        //return Promise.resolve(IPs);
        return this.http.get(this.serviceUrl).toPromise().then(response => response.json().data as Filter[]).catch(this.handleError);

    }

    getfilter(id: number): Promise<Filter> {

        const url = `${this.serviceUrl}/${id}`;
        return this.http.get(url).toPromise().then(response => response.json().data as Filter).catch(this.handleError);
        //return Promise.resolve(IPs[id-1]);

    }

    updatefilter(filter: Filter): Promise<Filter> {
        const url = `${this.serviceUrl}/${filter.id}`;
        return this.http.put(url, JSON.stringify(filter), { headers: this.headers }).toPromise().then(() => filter).catch(this.handleError);

    }


    private handleError(error: any): Promise<any> {
        console.log("error with the calling the service url");
        return Promise.reject(error.message || error);
    }
}