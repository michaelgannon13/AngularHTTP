import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather/weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  weather;
  temperature;
  humidity;
  location;

  ngOnInit() {
    this.getWeather();
  }

  getWeather(){
    this.weatherService.getWeather()
      .subscribe((res: any[]) => {
        this.weather = res;
        this.temperature = this.weather.main.temp;
        this.humidity = this.weather.main.humidity;
        this.location = this.weather.name;
      });
  }

}


