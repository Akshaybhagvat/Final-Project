import { Component, OnInit } from '@angular/core';
import { LibrarymanagementService } from '../librarymanagement.service';

@Component({
  selector: 'app-checkprice1',
  templateUrl: './checkprice1.component.html',
  styleUrls: ['./checkprice1.component.css']
})
export class Checkprice1Component implements OnInit {
   
  data:any;
  constructor(private s1:LibrarymanagementService) { }

  ngOnInit(): void {
    let response = this.s1.viewprice();

    response.subscribe((data1)=>this.data=data1);
  }

}
