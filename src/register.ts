import { Component, OnInit } from '@angular/core';
import { httpService } from 'httpservice';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
    selector: "app-home",
    templateUrl: 'register.html',
    providers: [httpService],
})
export class RegisterComponent implements OnInit {

    constructor(private HttpService: httpService, private router: Router) { }

    signup(form: any, event: Event) {
        event.preventDefault();
        if (form.valid) {
            let signupData = {
                personalDetails: form.value
            }
            this.HttpService.post("user", signupData)
                .subscribe(resp => {
                    swal("Thanks For Register", "Email Has been Send...", "success");
                }, err => {
                    console.log("=========== Error =========", JSON.parse(err._body));
                });
            form.resetForm();

            return true;
        }
        swal("Error!", "Please fill out all the required fields...", "error");
    }

    ngOnInit() {
    }

}