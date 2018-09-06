import { Component } from '@angular/core';
import { RecordService } from './record.service'
import { Router,RouterModule} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   urlpath='';
  constructor(private getJsondata:RecordService,private router: Router)
  {
   
    console.log('url',this.router.url); 
  }
  ngOnInit()
  {
    console.log('Data',this.getJsondata.getdata());

  }
  title = 'restaurant';
}
