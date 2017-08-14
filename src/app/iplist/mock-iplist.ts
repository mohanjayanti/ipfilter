import { IpfilterentryComponent } from '../ipfilterentry/ipfilterentry.component';
 
 export const IPs: IpfilterentryComponent[] = [
      {  sourceip: '100.x.x.11', name: 'OOHCList', methodName: 'OOHCList', methodNS:'urn:api:com', type:'SOAP', action:'BLOCK', uri:'' },
      {  sourceip: '100.x.x.12', name: 'OOHCListDET', methodName: 'OOHCListDET', methodNS:'urn:api:com', type:'SOAP', action:'OPEN', uri:'' },
      {  sourceip: '100.x.x.13', name: 'GetYoungPerson', methodName: 'GetYoungPerson', methodNS:'urn:api:com', type:'SOAP', action:'OPEN', uri:'' },
      {  sourceip: '100.x.x.14', name: 'QueryYoungPerson', methodName: 'QueryYoungPerson', methodNS:'urn:api:com', type:'SOAP', action:'BLOCK', uri:'' },
      {  sourceip: '100.x.x.15', name: 'SearchPerson', methodName: 'SearchPerson', methodNS:'urn:api:com', type:'SOAP', action:'BLOCK', uri:'' },
      {  sourceip: '100.x.x.16', name: 'GetPerson', methodName: 'GetPerson', methodNS:'urn:api:com', type:'SOAP', action:'BLOCK', uri:'' }      
    ];