import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {IplistService} from '../iplist/iplist.service';
import {Filter} from '../ipfilterentry/filter';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';



@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.scss']
})
export class FilterSearchComponent implements OnInit {

filters: Observable<Filter[]>;
private searchTerms = new Subject<string>();

  constructor(private service:IplistService, private router:Router) { }

  ngOnInit() {

    this.filters = this.searchTerms
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap(term => term ? this.service.search(term): Observable.of<Filter[]>([]))
    .catch(error => {
      return Observable.of<Filter[]>([]);
    })

  }

  search(term: string): void{
    this.searchTerms.next(term);
  }

  gotoDetail(filter: Filter): void{
    let link = ['detail',filter.id];
    this.router.navigate(link);
  }

}
