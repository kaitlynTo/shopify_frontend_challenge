import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  
  private apiKey: string = "ka3z0k9TpHZrXAba4lpEKsJUFYSmWX1t0RDzyHl9";
  private startDate: string = "2022-01-01";
  private endDate: string = "";
  constructor(private http: HttpClient) { }

  getImages() : Observable<any>{
    let today = new Date();
    this.endDate = today.getFullYear() + "-" + today.getMonth()+1 + "-" + today.getDate();
    console.log(`https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}&start_date=${this.startDate}&end_date=${this.endDate}`);
    return this.http.get<any>(`https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}&start_date=${this.startDate}&end_date=${this.endDate}`);
  }

}
