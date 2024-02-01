import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Authorize} from "./authorize";

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(private http: HttpClient) { }


  getList(): Observable<Authorize[]> {
    return this.http
      .post<Authorize[]>('http://localhost:8089/authorize', '{}')
      .pipe(map(
        response => response));
  }
}
