import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IplistService } from '../iplist/iplist.service';
import { Filter } from '../ipfilterentry/filter';

@Component({
  selector: 'app-filter-detail',
  templateUrl: './filter-detail.component.html',
  styleUrls: ['./filter-detail.component.scss']
})
export class FilterDetailComponent implements OnInit {

  filter: Filter;
  constructor(private location: Location,
    private route: ActivatedRoute,
    private iplistservice: IplistService
  ) { }

  ngOnInit() {
    console.log('ngOnInit of filter-details');
    this.route.paramMap.switchMap((params: ParamMap) => this.iplistservice.getfilter(+params.get('id'))).subscribe(filter =>
      this.filter = filter
    );
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.iplistservice.updatefilter(this.filter).then(() => this.goBack());
  }

}
