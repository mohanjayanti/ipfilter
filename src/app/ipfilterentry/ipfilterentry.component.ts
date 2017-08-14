import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipfilterentry',
  templateUrl: './ipfilterentry.component.html',
  styleUrls: ['./ipfilterentry.component.scss']
})
export class IpfilterentryComponent //implements OnInit 
{
  sourceip: string;
  name: string;
  methodName: string;
  methodNS: string;
  type: string;
  action: string;
  uri: string;
  //dateUpdated: Date;
  //dateCreated: Date;

  constructor() { }

  // ngOnInit() {
  // }

  // goBack(): void{

  // }

  // save(): void{

  // }
  

}
