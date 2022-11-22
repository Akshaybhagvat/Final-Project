import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrarymanagementService {

  constructor(private h1:HttpClient) { }

  link = "http://localhost:9001/add";
  link1 = "http://localhost:9001/update";
  link2 = "http://localhost:9001/bookstatus";
  link3 = "http://localhost:9001/search";
  link4 = "http://localhost:9001/viewprice";
  link5 = "http://localhost:9001/getprice";

  insertdata(data1:any)
  {
    return this.h1.post(this.link,data1);
  }

  updatedata(data1:any)
  {
    return this.h1.post(this.link1,data1);
  }
  checkdata(data1:any)
  {
    return this.h1.post(this.link2,data1);
  }
  bookstatus1()
  {
    return this.h1.get(this.link3);
  }
  checkp(data1:any)
  {
    return this.h1.post(this.link4,data1);
  }
    viewprice()
  {
    return this.h1.get(this.link5);
  }
}
