import { Component, OnInit } from '@angular/core';
import { LibrarymanagementService } from '../librarymanagement.service';

@Component({
  selector: 'app-bookstatus',
  templateUrl: './bookstatus.component.html',
  styleUrls: ['./bookstatus.component.css']
})
export class BookstatusComponent implements OnInit {

  constructor(private s1:LibrarymanagementService) { }

  ngOnInit(): void {
  }
  insertdata1(insertform: {value:any;})
     {
      return this.s1.checkdata(insertform.value).subscribe();
     }

}