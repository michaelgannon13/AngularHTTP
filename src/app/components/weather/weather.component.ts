import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather/weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  lat;
  long;
  currentWeather;
  isWeather = false;
  backgroundImage;

  ngOnInit() {
    this.getWeather();
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
          let weather = this.currentWeather.weather[0].main;
            switch (weather) {
              case 'Drizzle':
                this.backgroundImage = 'rain.jpg';
              break;
              case 'Rain':
                this.backgroundImage = 'rain.jpg';
              break;
              case 'Clouds':
                this.backgroundImage = 'clouds.jpg';
              break;
              case 'Mist':
                this.backgroundImage = 'mist.jpg';
              break;
              case 'Clear':
                this.backgroundImage = 'clear.jpg';
              break;
              case 'Snow':
                this.backgroundImage = 'snow.jpg';
              break;
              case 'Thunderstorm':
                this.backgroundImage = 'thunderstorm.jpg';
              break;
            }
          })
      });
    } else {
      console.log("No support for geolocation")
    }
  }
}


