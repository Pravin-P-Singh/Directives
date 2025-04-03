import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Directives';
  isDisplay:boolean=true;
  buttonName="Hide";
  toggle(){
    this.isDisplay=!this.isDisplay;
    if(this.isDisplay){
      this.buttonName="Hide";
    } else{
      this.buttonName="Show";
    }
  }

  students:{id:number,name:string,age:number}[]=[
    {
      id:101,
      name:"Pravin Singh",
      age:21
    },
    {
      id:102,
      name:"Virat Kohli",
      age:34
    }
  ]
}
