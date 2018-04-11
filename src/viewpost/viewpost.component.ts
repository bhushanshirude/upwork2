import { Component, OnInit } from '@angular/core';
import { httpService } from 'httpservice';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {
private userData;
  constructor(private HttpService:httpService , private router:Router) {
    this.userData=JSON.parse(localStorage.getItem("user"));
   }

  ngOnInit() {
  }

}
