import { Component, OnInit } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask/dist/angular2TextMask';
import swal from 'sweetalert2';
import { httpService } from 'httpservice';
import { Router } from '@angular/router';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';


@Component({
  selector: 'app-home',
  templateUrl: 'updateprofile.html'
})

export class UpdateComponent implements OnInit {
  public mask = ['+', /\d/, /\d/, '(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,];
  public mask1 = [/[1-9]/, /\d/, '.', /[1-9]/, /\d/, '/hr'];
  private userData;
  private swalService;
  src: string = "";
  private profileImg;
   constructor(private HttpService: httpService, private router: Router) {
    this.userData = JSON.parse(localStorage.getItem("user"));
  }
  resizeOptions: ResizeOptions = {
    resizeMaxHeight: 128,
    resizeMaxWidth: 128
  };
  selected(imageResult: ImageResult) {
    this.src = imageResult.resized
      && imageResult.resized.dataURL
      || imageResult.dataURL;
  }
  ngOnInit() {}

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
        let file: File = fileList[0];
        let fd = new FormData();
        fd.append('filename', file);
  
        this.HttpService.post('user/upload/'+ this.userData._id, fd)
            .subscribe(resp =>
               {
                this.profileImg = "http://localhost:8080/profile/" + file.name;
            },
          err=>{
            console.log("===============Bhushan=========",err)
          });
          return true;
    }
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



