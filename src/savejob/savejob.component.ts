import { Component, OnInit } from '@angular/core';
import { httpService } from 'httpservice';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-savejob',
  templateUrl: './savejob.component.html',
  styleUrls: ['./savejob.component.css']
})
export class SavejobComponent implements OnInit {
  private Hireprojects;
private savedJob;
  constructor(private HttpService:httpService , private router :Router) { }

  ngOnInit() {
    this.HttpService.post("user/find",{"personalDetails.projectName":'Hire'}).subscribe(resp=>{
      this.Hireprojects=resp.docs;
      console.log("========search======",this.Hireprojects)
    },err=>{
      console.log("=======Error=========")
    })
  }
  submit(){
    this.HttpService.post("user/find",{"personalDetails.projectName":"Hire"}).subscribe(resp=>{
      this.savedJob =resp.docs;
      console.log("=========savedJob===========",this.savedJob)
    })
    swal("Thanks","Your Proposal has Been Submit","success")
  }

}
