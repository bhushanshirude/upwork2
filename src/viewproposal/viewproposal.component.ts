import { Component, OnInit } from '@angular/core';
import { httpService } from 'httpservice';
import { Router } from '@angular/router';
import swal from "sweetalert2";
import {OrdinalPipe} from 'filterservice';

@Component({
  selector: 'app-viewproposal',
  templateUrl: './viewproposal.component.html',
  styleUrls: ['./viewproposal.component.css']
})
export class ViewproposalComponent implements OnInit {
  private userData;
  private freelancers;
  constructor(private HttpService: httpService, private router: Router) {
    this.userData = JSON.parse(localStorage.getItem("user"));
  }
  ngOnInit() {
    this.HttpService.post("user/find", { "personalDetails.projectName": 'Freelancer' }).subscribe(
      resp => {
        this.freelancers = resp.docs;
        console.log("============ViewProposal========", this.freelancers);
      },
      err => {
        swal("Error", "check Details", "error")
      })
  }
}
