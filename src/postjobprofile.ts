import { Component, OnInit } from '@angular/core'
import swal from 'sweetalert2';
import { httpService } from 'httpservice';
import { Router } from '@angular/router';
import { validateConfig } from '@angular/router/src/config';

@Component({
    selector: 'app-home',
    templateUrl: 'postjobprofile.html'
})
export class PostComponent implements OnInit {
    private userData;
    constructor(private HttpService: httpService, private router: Router) {
        this.userData = JSON.parse(localStorage.getItem("user"));
        console.log(this.userData)
    }

    ngOnInit() {
    }

    jobpost(form: any, event: Event) {

        if (form.valid) {

            this.HttpService.put("user/" + this.userData._id, this.userData).subscribe(
                resp => {
                    swal("Thank for post New job", "Update New Job", "success")
                    console.log("======s=====",resp)

                    this.router.navigate(["/home/postupdate"])
                },
                err => {
                    console.log("=======err===========", err)
                });
            // form.resetForm();

            return true;
        }
        swal("Error", "Fill The All Details", "error");
    }
}

