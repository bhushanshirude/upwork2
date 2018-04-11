import { Component, OnInit } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask/dist/angular2TextMask';
import swal from 'sweetalert2';
import { httpService } from 'httpservice';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'postjobupdate.html'
})

export class PostUpdateComponent implements OnInit {
    public mask0 = ['$', /[0-9]/, /\d/, /\d/, /\d/, '.', /[0-9]/, /\d/];
    private userData;
    constructor(private HttpService: httpService, private router: Router) {
        this.userData = JSON.parse(localStorage.getItem("user"));

    }
    ngOnInit(){}
    post(form: any, event: Event) {
        event.preventDefault();
        console.log(this.userData)
        this.HttpService.put("user/" + this.userData._id, this.userData).subscribe(resp => {
            swal("Post Job Updated", "Thank you", "success")
            this.router.navigate(["/home/viewjob"])
        }, err => {

            swal("Error", "Update Job Feild", "error")
        });
        // form.resetForm();
        return true;


    }
}