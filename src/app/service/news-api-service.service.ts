import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiServiceService {

  constructor(private _http:HttpClient) { }

  //Top heading news api url
  apiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2ce0fa1229c14f0982cc7a8a74a8c249";

  headline():Observable<any>{
    return this._http.get(this.apiUrl);
  }
  //Tech News
  techApiUrl = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2ce0fa1229c14f0982cc7a8a74a8c249";
  techHeading():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }
}
