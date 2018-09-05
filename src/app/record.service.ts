import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecordService {
  constructor(private http: HttpClient) {}
  getdata()
  {
    return this.http.get("http://jsonplaceholder.typicode.com/users").
    subscribe(data=>{
      console.log("We got data",data);
    })
 
  }
}
