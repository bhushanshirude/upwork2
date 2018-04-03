import { Component, OnInit } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';
import swal from 'sweetalert2';
import { httpService } from 'httpservice';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'login.html'
})
export class LoginComponent implements OnInit {
    private isPwd?: boolean = true;
    private userData;
    constructor(private HttpService: httpService, private router: Router) {
        this.userData = JSON.parse(localStorage.getItem("user"));
        console.log("============ Fetched user data =============", this.userData);
    }

    ngOnInit() { }

    login(form: any, event: Event) {

        if (form.valid) {

            console.log("================j1========", this.userData)
            this.HttpService.post("user/find", form.value).subscribe(resp => {
                // console.log("============ Response ============", resp);
                localStorage.setItem("user", JSON.stringify(resp.docs));
                this.userData = JSON.parse(localStorage.getItem("user"));
                swal("Login Successfully", "Continue your profile", "success");

                let red: string = "home/profile";
                if (this.userData.personalDetails.projectName.toLowerCase() == 'hire') {
                    red = "home/post";
                }
                console.log("============= Redirect to ==============", red);
                this.router.navigate([red]);
                form.resetForm();
                return true;
            })
        }
        swal("Error", "Please Update the field", "error")
    }
}
