import { Component, OnInit } from '@angular/core';
import { httpService } from 'httpservice';
import { Router } from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-jobsearch',
  templateUrl: './jobsearch.component.html',
  styleUrls: ['./jobsearch.component.css']
})
export class JobsearchComponent implements OnInit {
  private Hireprojects;
  constructor(private HttpService: httpService, private router: Router) { }

  ngOnInit() {
    this.HttpService.post("user/find", { "personalDetails.projectName": "Hire" }).subscribe(
      resp => {
        this.Hireprojects = resp.docs;
        console.log("===========searchjob=======", this.Hireprojects)
      }, err => {
        console.log("=======Error========")
      }
    )
  }
  calling() {
    swal("Thanks", "Your Job is Saved", "success")
  }

}
