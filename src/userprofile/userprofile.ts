import {Component, OnInit} from '@angular/core'
import { httpService } from 'httpservice';
import { Router } from '@angular/router';
import swal from 'sweetalert2'
@Component({
    selector:'app-home',
    templateUrl:'userprofile.html'
})
export class userComponent implements OnInit{
    private userData;
    constructor(private HttpServices :httpService,private router :Router){
        this.userData=JSON.parse(localStorage.getItem("user"));
        console.log(this.userData)
    }
    ngOnInit(){}
    update(form:any,event:Event){
  
            this.HttpServices.put("user/"+ this.userData._id ,this.userData).subscribe(resp=>{
                console.log("=======userdatasss=========",this.userData)
                swal("Thanks","update password","success")
                this.router.navigate(['home/search'])
            },
        err=>{
            swal("update","update the feild","error")
            console.log("========Bhushansh==========",err)
        })
         
          
        }
    }