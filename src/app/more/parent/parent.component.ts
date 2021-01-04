import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DataServiceService } from 'src/app/data-service.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public data:any=" ";
  constructor(private service:DataServiceService) { }
  textfild:any='';
  ngOnInit() {
  }
  onSend(data: any){
   this.service.onPass(data);
  console.log(data);
  alert(data);
  }

}
