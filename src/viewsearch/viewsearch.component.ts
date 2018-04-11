import { Component, OnInit } from '@angular/core';
import { httpService } from 'httpservice';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import {OrdinalPipe}from 'filterservice'


@Component({
  selector: 'app-viewsearch',
  templateUrl: './viewsearch.component.html',
  styleUrls: ['./viewsearch.component.css']
})
export class ViewsearchComponent implements OnInit {
  private userData;
  private freelancerData;
  constructor(private HttpService: httpService, private router: Router) {
    this.userData = JSON.parse(localStorage.getItem("user"));
  }
  ngOnInit() {
    this.HttpService.post("user/find", { "personalDetails.projectName": "Freelancer" })
      .subscribe(resp => {
        this.freelancerData = resp.docs;
        // console.log("======Response ===========:", this.freelancerData);
      }, err => {
        swal("Error", JSON.parse(err._body).message, "error");

      })
  }

  Invite(i) {
    this.HttpService.post("user/send/"+ this.freelancerData[0]._id,{}).subscribe(resp => {
      swal("Thanks", "Invitation Link Has Been Send", "success")
      
    }, err => {
      swal("", "Invitation link has Not Been Send", "error")
    }
    )
  }
}

