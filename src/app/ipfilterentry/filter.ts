//import 'rxjs/add/operator/switchMap';
//import { Component} from '@angular/core';
//import { Location } from '@angular/common';
//import { ActivatedRoute, ParamMap } from '@angular/router';
//import { IplistService } from '../iplist/iplist.service';

// @Component({
//   selector: 'app-ipfilterentry',
//   templateUrl: './ipfilterentry.component.html',
//   styleUrls: ['./ipfilterentry.component.scss']
// })
export class Filter //implements OnInit 
{
  id: number;
  sourceip: string;
  name: string;
  methodName: string;
  methodNS: string;
  type: string;
  action: string;
  uri: string;
  //refer: IpfilterentryComponent;
  //dateUpdated: Date;
  //dateCreated: Date;

  //constructor( ) { }

  // ngOnInit() {
  //   this.route.paramMap.switchMap((params: ParamMap) => this.iplistservice.getIp(+params.get('id'))).subscribe( ipfilter => 
  //   //this.refer = ipfilter    
  //   console.log(' filter entry is ='+ ipfilter.id)
  // //   {
  // //     console.log(' filter entry is ='+ ipfilter.id);
  // //     this.id = ipfilter.id,
  // //     this.refer = ipfilter; 
  // //   this.sourceip = ipfilter.sourceip;
  // //   this.name = ipfilter.name;
  // //   this.methodName = ipfilter.methodName;
  // //   this.methodNS = ipfilter.methodNS;
  // //   this.type = ipfilter.type;
  // //   this.action = ipfilter.action;
  // //   this.uri = ipfilter.uri;
  // // } 
  // );
  // }

  // goBack(): void {
  //   this.location.back();
  // }

  // save(): void{

  // }


}
