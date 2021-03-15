import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const _API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class HttpdemoService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(_API_URL + '/alldata');
  }

  public create(body: any) {
    return this.http.post(_API_URL + "/create", body)
  }
}
