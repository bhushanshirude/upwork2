import { Component, OnInit } from '@angular/core';
import { httpService } from 'httpservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invitationview',
  templateUrl: './invitationview.component.html',
  styleUrls: ['./invitationview.component.css']
})
export class InvitationviewComponent implements OnInit {
private userData;
  constructor(private HttpService :httpService,private router:Router) {
    this.userData=JSON.parse(localStorage.getItem("user"));
    console.log("================invitation==========",this.userData)
  }

  ngOnInit() {
  }

}
