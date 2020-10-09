import { Component, VERSION, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
  name = 'Angular ' + VERSION.major;
  score:number = 10;
  constructor() { }
  ngOnInit() {
    new Observable((observer)=>{
      observer.next();
      this.score+10;
    }).subscribe(() =>{
      console.log(this.score);
      alert(this.score);
    })
  }
}
