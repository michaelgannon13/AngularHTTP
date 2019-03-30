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
  lat;
  long;

  currentWeather;
  isWeather = false;

  ngOnInit() {
  }

  
  getWeather(): void{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.lat = latitude;
        this.long = longitude;
        this.weatherService.getLocation(this.lat, this.long)
          .subscribe((res: any[]) => {
            this.currentWeather = res;
            this.isWeather = true;
            console.log('current weather response is ', this.currentWeather)
          })
      });
    } else {
      console.log("No support for geolocation")
    }
  }
  
  // getWeather(){
  //   this.weatherService.getWeather()
  //     .subscribe((res: any[]) => {
  //       this.weather = res;
  //       this.temperature = this.weather.main.temp;
  //       this.humidity = this.weather.main.humidity;
  //       this.location = this.weather.name;
  //     });
  // }
}


