import { InMemoryDbService } from 'angular-in-memory-web-api';


//import {IPs} from './mock-iplist';

export class InMemoryDataService implements InMemoryDbService {

createDb(){
//IPss = IPs;
//return {IPs} ;

let iplists = [
      {  id:1, sourceip: '100.x.x.11', name: 'OOHCList', methodName: 'OOHCList', methodNS:'urn:api:com', type:'SOAP', action:'BLOCK', uri:'' },
      {  id:2, sourceip: '100.x.x.12', name: 'OOHCListDET', methodName: 'OOHCListDET', methodNS:'urn:api:com', type:'SOAP', action:'OPEN', uri:'' },
      {  id:3, sourceip: '100.x.x.13', name: 'GetYoungPerson', methodName: 'GetYoungPerson', methodNS:'urn:api:com', type:'SOAP', action:'OPEN', uri:'' },
      {  id:4, sourceip: '100.x.x.14', name: 'QueryYoungPerson', methodName: 'QueryYoungPerson', methodNS:'urn:api:com', type:'SOAP', action:'BLOCK', uri:'' },
      {  id:5, sourceip: '100.x.x.15', name: 'SearchPerson', methodName: 'SearchPerson', methodNS:'urn:api:com', type:'SOAP', action:'BLOCK', uri:'' },
      {  id:6, sourceip: '100.x.x.16', name: 'GetPerson', methodName: 'GetPerson', methodNS:'urn:api:com', type:'SOAP', action:'BLOCK', uri:'' },
      {  id:7, sourceip: '100.x.x.17', name: 'GetPerson', methodName: 'GetPerson', methodNS:'urn:api:com', type:'SOAP', action:'BLOCK', uri:'' }            
    ];

    return {iplists};

}
}