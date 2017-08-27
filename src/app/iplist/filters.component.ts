import { Component, OnInit } from '@angular/core';
import { Filter } from '../ipfilterentry/filter';
import { IplistService } from './iplist.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-iplist',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
  //providers: [IplistService]
})
export class FiltersComponent implements OnInit {

  iplist: Filter[];
  selectedEntry: Filter;

  constructor(private iplistservice: IplistService,
  private location: Location, private router: Router) { }

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
    console.log('nGOnInit of IplistComponent');
    this.iplistservice.getIplist().then(iplist => this.iplist = iplist);

  }

  onSelect(ip: Filter): void{
    // alert('sd');
   this.selectedEntry = ip;
  
  }

  goBack(): void{
    
    this.location.back();
    
  }

  gotoDetail(): void{

    this.router.navigate(['/detail',this.selectedEntry.id]);
  }

  addNew(): void{
    this.router.navigate(['/add']);
  }

}
