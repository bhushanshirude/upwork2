import { Component, OnInit } from '@angular/core';
import { httpService } from 'httpservice';
import { Router } from '@angular/router';
import {OrdinalPipe} from 'filterservice';

@Component({
  selector: 'app-viewinvite',
  templateUrl: './viewinvite.component.html',
  styleUrls: ['./viewinvite.component.css']
})
export class ViewinviteComponent implements OnInit {
  private userData;
  private freelancers;
  constructor(private HttpService: httpService, private router: Router) {
    this.userData = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {
    this.HttpService.post("user/find", { "personalDetails.projectName": "Freelancer" }).subscribe(
      resp => {
        this.freelancers = resp.docs;
        console.log("=======viewinvite=====", this.freelancers);
      },
      err => {
        console.log("============Error========")
      })
  }

}
