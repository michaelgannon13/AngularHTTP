import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather/weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  weather = [];

  ngOnInit() {
  }

  getWeather(){
    this.weatherService.getWeather()
      .subscribe((res: any[]) => {
        this.weather = res;
        alert(this.weather);
      })
  }

}


