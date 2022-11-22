import { Component, OnInit } from '@angular/core';
import { LibrarymanagementService } from '../librarymanagement.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private s1:LibrarymanagementService) { }

  ngOnInit(): void {
  }

  updatedata1(updateform: {value:any;})
  {
   return this.s1.updatedata(updateform.value).subscribe();
  }


}
