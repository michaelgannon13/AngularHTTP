import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  baseUrl = 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c7d5caabee4c04b43a759f96a2c05174';

  getWeather(){
    return this.http.get(this.baseUrl);
  }
}
