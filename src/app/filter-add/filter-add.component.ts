import { Component, OnInit } from '@angular/core';
import {Filter} from '../ipfilterentry/filter';
import {Location} from '@angular/common';
import {ActivatedRoute, ParamMap} from '@angular/router';
import{IplistService} from '../iplist/iplist.service';

@Component({
  selector: 'app-filter-add',
  templateUrl: './filter-add.component.html',
  styleUrls: ['./filter-add.component.scss']
})
export class FilterAddComponent implements OnInit {

filter: Filter;
//service: IplistService; 

constructor(private location: Location, private route: ActivatedRoute, private service: IplistService) {

//this.service = service;

 }

  ngOnInit() {
  this.filter = new Filter();
  }

  add(): void{
  this.service.addfilter(this.filter).then(()=> this.goBack());
}

goBack(): void{

this.location.back();
}

}
