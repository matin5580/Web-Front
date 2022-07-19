import { DataService } from './../data/data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constant';

@Injectable({
  providedIn: 'root',
})
export class TagService extends DataService {
  private httpService: HttpClient;

  constructor(http: HttpClient) {
    super(Constants.url + '/tag', http);
    this.httpService = http;
  }
}
