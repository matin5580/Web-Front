import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataService } from './../data/data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateEmailService extends DataService {

  httpService: HttpClient
  
  constructor(http: HttpClient) {
    super("http://localhost:8080/email/", http);
    this.httpService = http
  }

  sendValidatedUserEmail(email: any, code: any){
    return this.httpService.get('http://localhost:8080/email/verify-email/' + email + "/" + code)
  }

  isEmailValid(url:string){
    return this.httpService.get(url)
  }
}
