import { Component, OnInit } from '@angular/core';
import { LibrarymanagementService } from '../librarymanagement.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private s1:LibrarymanagementService) { }

  ngOnInit(): void {
  }
  insertdata1(insertform: {value:any;})
     {
      return this.s1.insertdata(insertform.value).subscribe();
     }

}
