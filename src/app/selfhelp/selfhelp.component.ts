import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import swal from 'sweetalert2';
@Component({
  selector: 'app-selfhelp',
  templateUrl: './selfhelp.component.html',
  styleUrls: ['./selfhelp.component.css']
})
export class SelfhelpComponent implements OnInit {
  public buttontext='Send Information';
  public title='ReactJS Developer';
  public infolink="https://drive.google.com/file/d/1a43ToNn5dun1XIxpr2sr43aLhAz1zMWD/view?usp=drivesdk";
  constructor( public service:AuthService,public spin:NgxSpinnerService) { }

  ngOnInit() {
  }
  sendemail(data)
  {
    this.spin.show();
    this.service.sendemail(data).subscribe((res:any)=>{
      console.log(res.status);
      if(res.status==true)
      {
        this.spin.hide();
        swal ({
          title:"success",
          text: "Information sent to - "+data.email,
          type: "success",
          confirmButtonText: 'OK'
        })
      }
      else
      {
        this.spin.hide();
        swal ({
          title:"error",
          text: "Something went wrong, Contact Debanik 8194946794",
          type: "error",
          confirmButtonText: 'OK'
        })
      }
    });
  }
}
