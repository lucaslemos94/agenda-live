import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Live } from '../model/live.model';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  constructor(private httpClient: HttpClient) { }

  apiUrl ='http://localhost:8080/lives';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  public getLives(flag: string):Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag);
  }


  public postLives(live:any): Observable<Live>{
    return this.httpClient.post<any>(this.apiUrl,live, this.httpOptions);
  }

}
