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

  selectedTheme:string='';

  //attribute directive

  //ngStyle
  p_color:String="";

  User={
    username:"",
    password:""
  }
  msg:string="";
  login(){
    if(this.User.username==="Pravin" && this.User.password==="123"){
      alert("Logged in successfully");
    }
    if(this.User.username!="Pravin"){
      this.p_color="blue";
      this.msg="Invalid Username"
    }
    if(this.User.password!="123"){
      this.p_color="black";
      this.msg="Incorrect password";
    }
    if(this.User.username!="Pravin" && this.User.password!="123"){
      this.p_color="red";
      this.msg="Invalid username and password";
    }
  }

  //ngClass
  isTrue:boolean = false;

  //Sir's way
  num:number = 1;
}
