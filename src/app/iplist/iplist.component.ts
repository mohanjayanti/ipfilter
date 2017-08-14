import { Component, OnInit } from '@angular/core';
import { IpfilterentryComponent } from '../ipfilterentry/ipfilterentry.component';
import { IplistService } from './iplist.service';

@Component({
  selector: 'app-iplist',
  templateUrl: './iplist.component.html',
  styleUrls: ['./iplist.component.scss'],
  providers: [IplistService]
})
export class IplistComponent implements OnInit {

  iplist: IpfilterentryComponent[];
  selectedEntry: IpfilterentryComponent;

  constructor(private iplistservice: IplistService) { }

  ngOnInit() {  
    /*
        const IPs: IpfilterentryComponent[] = [
      {  sourceip: 'x.x.x.11', name: 'OOHCList', methodName: 'OOHCList', methodNS:'urn:api:com', type:'SOAP', action:'BLOCK', uri:'' },
      {  sourceip: 'x.x.x.12', name: 'OOHCListDET', methodName: 'OOHCListDET', methodNS:'urn:api:com', type:'SOAP', action:'OPEN', uri:'' },
      {  sourceip: 'x.x.x.13', name: 'GetYoungPerson', methodName: 'GetYoungPerson', methodNS:'urn:api:com', type:'SOAP', action:'OPEN', uri:'' },
      {  sourceip: 'x.x.x.14', name: 'QueryYoungPerson', methodName: 'QueryYoungPerson', methodNS:'urn:api:com', type:'SOAP', action:'BLOCK', uri:'' },
      {  sourceip: 'x.x.x.15', name: 'SearchPerson', methodName: 'SearchPerson', methodNS:'urn:api:com', type:'SOAP', action:'BLOCK', uri:'' },
      {  sourceip: 'x.x.x.16', name: 'GetPerson', methodName: 'GetPerson', methodNS:'urn:api:com', type:'SOAP', action:'BLOCK', uri:'' }      
    ];
    this.iplist = IPs;
    */
    this.iplistservice.getIplist().then(iplist => this.iplist = iplist);

  }

  onSelect(ip: IpfilterentryComponent): void{
    // alert('sd');
   this.selectedEntry = ip;
  
  }

}
