import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SendEmailComponent } from './send-email/send-email.component';

const rout=[{
  path:"",
  component:LandingComponent
},
{
  path:"email",
  component:SendEmailComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SendEmailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rout),
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
