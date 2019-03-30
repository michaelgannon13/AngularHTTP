import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://api.openweathermap.org';
  APIKey = '3d9a7a54e4d985054d7bad6b539f6391';
  lat;
  long;

  getWeather(){
    return this.http.get(this.baseUrl + 
      '/data/2.5/weather?q=London&APPID=' + 
      this.APIKey);
  }

  getLocation(lat, long){
    return this.http.get(this.baseUrl +
    '/data/2.5/weather?lat=' + lat + '&lon=' + long + 
    '&APPID=' + this.APIKey);
  }
}
