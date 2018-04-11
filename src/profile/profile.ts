import { Component, OnInit } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask/dist/angular2TextMask';
import swal from 'sweetalert2';
import { httpService } from 'httpservice';
import { Router } from '@angular/router';
// you can import data two way
// const swal = require('sweetalert2')

@Component({
    selector: 'app-home',
    templateUrl: 'profile.html'
})
export class ProfileComponent implements OnInit {
    public mask = ['+', /\d/, /\d/, '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,];
    public mask0 = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
    private userData;
    constructor(private HttpService: httpService, private router: Router) {
        this.userData = JSON.parse(localStorage.getItem("user"));
        // this.userData.personalDetails.ExperienceLevel = "";
    }
    ngOnInit() {
    }
    continue(from: any, event: Event) {
        event.preventDefault();
        if (from.valid) {

            console.log("===== User Data =====", this.userData);
            this.HttpService.put("user/" + this.userData._id, this.userData).subscribe(
                resp => {

                    swal("Thanks For Update", "Profile", "success")
                    console.log("========= yuhu ==========", resp);
                    this.router.navigate(["/home/update"]);
                }, err => {
                    console.log(JSON.parse(err));
                });
                
            return true;
        }

        swal("Error...!", "Profile", "error");
    }
}