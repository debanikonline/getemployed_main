import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class AuthService {

  constructor(public http:HttpClient) { }
  insert_into_db(data)
  {
    console.log(data.productImage,"insert_into_db");
    let headers = new HttpHeaders();
    const fd = new FormData();
    fd.append('productImage',data.productImage);
     return this.http.post('http://localhost:3000/products',data);
  }
  show_all()
  {
    return this.http.get('https://docupload.herokuapp.com/products/show/all');
    
  }
  deleteone(data)
  {
    console.log(data);
    return this.http.get('https://docupload.herokuapp.com/products/delete/'+data);
  }
  updateone(data)
  {
    console.log(data);
    return this.http.post('https://docupload.herokuapp.com/products/update',data);
  }
  sendemail(data)
  {
    console.log(data,"service api");
    return this.http.post("https://docupload.herokuapp.com/sendmail",data);
  }
}
