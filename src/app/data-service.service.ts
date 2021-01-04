import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  data:any={};
  onPass(data:any){
    this.onPass=data;
  }
  onGet(){
    return this.data;
  }
}
