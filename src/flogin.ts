import { Component, OnInit } from '@angular/core';
import { httpService } from 'httpservice';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
    selector: "app-home",
    templateUrl: "flogin.html"
})
export class FloginComponent implements OnInit {
    private userData;
    constructor(private HttpServices: httpService, private router: Router) {
        this.userData = HttpServices.getLocalStorage("user");
        console.log("Logged in user data ======>", this.userData);
    }
    ngOnInit() { }
    login(form: any, event: Event) {

        if (form.valid) {
            this.HttpServices.post("user/forgotPasswordEmail", form.value).subscribe(resp => {
                swal("Success", "Please Check your email", "success");
            }, err => {
                swal("Error", JSON.parse(err._body).message, "error")
            })
        }
    }
} 