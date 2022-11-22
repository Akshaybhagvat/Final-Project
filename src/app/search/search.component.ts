import { Component, OnInit } from '@angular/core';
import { LibrarymanagementService } from '../librarymanagement.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private s1:LibrarymanagementService) { }
  data:any;
  
  ngOnInit(): void {
  
    let response = this.s1.bookstatus1();
     
    response.subscribe((data1)=>this.data=data1);
  }
 

}
