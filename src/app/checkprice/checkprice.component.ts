import { Component, OnInit } from '@angular/core';
import { LibrarymanagementService } from '../librarymanagement.service';

@Component({
  selector: 'app-checkprice',
  templateUrl: './checkprice.component.html',
  styleUrls: ['./checkprice.component.css']
})
export class CheckpriceComponent implements OnInit {

  constructor(private s1:LibrarymanagementService) { }

  ngOnInit(): void {
  }
  insertdata1(insertform: {value:any;})
     {
      return this.s1.checkp(insertform.value).subscribe();
     }

}
