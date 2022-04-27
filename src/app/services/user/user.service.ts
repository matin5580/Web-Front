import { Observable } from 'rxjs';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { DataService } from './../data/data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService extends DataService {

  httpService: HttpClient;

  constructor(http: HttpClient) {
    super("http://localhost:8080",http)
    this.httpService = http;
  }

  getUser(username: any){
    return this.httpService.get(
      'http://localhost:8080/user/get-user-for-user-management/' + username
    );
  }

  updateProfileImage(formData: FormData):Observable<HttpEvent<any>>{
    return this.httpService.put<HttpEvent<any>>(
      'http://localhost:8080/user/update-profile-image', formData, {reportProgress: true, observe: 'events'})
  }

  getUserByToDoId(todoId: any){
    return this.httpService.get("http://localhost:8080/user/get-user-by-todoId/" + todoId)
  }
}
