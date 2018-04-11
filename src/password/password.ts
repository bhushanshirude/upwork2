import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { httpService } from 'httpservice';

@Component({
    selector: 'app-home',
    templateUrl: 'password.html',
    providers: [httpService],

})
export class PasswordComponent implements OnInit {
    private isPwd?: Boolean = true;
    // private req;
    
    private userData;
    constructor(private router: Router, private HttpService: httpService) {
        this.userData = JSON.parse(localStorage.getItem("user"));
        console.log("===============Response============",this.userData);
    }        
    ngOnInit() {
        
    }

    next(form: any, event: Event) {
        if (form.valid) {

            this.HttpService.put("user/" + this.userData._id, this.userData).subscribe(resp => {
                swal("successfully ", "Update Password", "success");
                this.router.navigate(['/home/login']);
            }, err => {
                swal("Error", "Please Update the field", "error")
            });
            form.resetForm();
            return true;
        }
        swal("Error", "Please Update the field", "error")
    }
}
