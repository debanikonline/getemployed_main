import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  constructor(public service:AuthService) { }

  ngOnInit() {
   
  }
  sendemail(data)
  {
    this.service.sendemail(data).subscribe((res:any)=>{
      console.log(res,"Response");
    })
  }

}
