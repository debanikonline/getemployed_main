import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SelfhelpComponent } from './selfhelp/selfhelp.component';
import { NgxSpinnerModule } from 'ngx-spinner';

const rout=[{
path:"",
component:SelfhelpComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    SelfhelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    RouterModule.forRoot(rout),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
