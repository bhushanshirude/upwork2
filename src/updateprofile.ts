import { Component, OnInit } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask/dist/angular2TextMask';
import swal from 'sweetalert2';
import { httpService } from 'httpservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'updateprofile.html'
})

export class UpdateComponent implements OnInit {
  public mask = ['+', /\d/, /\d/, '(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,];
  public mask1 = [ /[1-9]/, /\d/, '.', /[1-9]/, /\d/, '/hr'];
  private userData;
  private swalService;
  constructor(private HttpService: httpService, private router: Router) {
    this.userData = JSON.parse(localStorage.getItem("user"))
  }
  ngOnInit() {

  }
  review(form: any, event: Event) {
    event.preventDefault();
    if (form.valid) {

      this.HttpService.put("user/" + this.userData._id, this.userData).subscribe(
        resp => {
          swal("Profile is Complete", "Thank you", "success");
          this.router.navigate(["/home/search"]);
        }, err => {
          swal("Error", "update your Profile", "error")
        });
        form.resetForm();
        return true;
    }
    swal("Error", "update your Profile", "error")
  }
}