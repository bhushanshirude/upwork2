import { Component, OnInit } from '@angular/core';
import { httpService } from 'httpservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private userData;
  constructor(private HttpService: httpService, private router: Router){
    this.userData = JSON.parse(localStorage.getItem("user"));
        console.log("=============userData==========", this.userData);
  }
  ngOnInit(){}
  title = 'app works!';
  profileImg = "http://localhost:8080/profile/136109765.jpg"; 
  
}
