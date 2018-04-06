import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { httpService } from 'httpservice';
import swal from 'sweetalert2';

@Component({
    selector: 'app-home',
    templateUrl: 'forgotpassword.html'
})
export class ForgotComponent implements OnInit {
    private isPwd: boolean = true;
    private userId;
    private userData;
    constructor(private HttpService: httpService, private router: Router, private activatedRoute: ActivatedRoute) {
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((param) => {
            this.userId = param['id'];
            // this.getUserData();
            console.log("============== User ID ==============", this.userId);
        });
    }
    // getUserData() {
    //     this.HttpService.post("user/find",this.userData).subscribe(resp=>{
    //         console.log("======Bhushan======",resp)
    //     },err=>{
    //         console.log("====Error======",err)
    //     })
    // }
    save(form: any, event: Event) {

        if (form.valid) {
            console.log("======= Data to be updated ===========", form.value);
            this.HttpService.put("user" + this.userData._id, this.userData).subscribe(resp => {

                swal("successfully ", "Update Password", "success");

                this.router.navigate(['/home/flogin']);

            }, err => {
                swal("Error", "Please Update the field", "error")
            }
            )
            form.resetForm();
            return true;
        }
        swal("Error", "Please Update the field", "error")
    }
}
