import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather/weather.service';
import { PaintService } from '../../services/paint/paint.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService, private paintService: PaintService) { }

  lat;
  long;
  currentWeather;
  isWeather = false;
  backgroundImage;
  painting;

  ngOnInit() {
    this.getWeather();
    this.getPainting();
  }


  getPainting() {
    this.paintService.getPainting()
      .subscribe((res: any[]) => {
        this.painting = res;
        console.log(this.painting);
      });
  }

  getWeather(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
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


