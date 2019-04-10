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
  paintingID;

  ngOnInit() {
    this.getLocation();
  }

  getLocation(): void {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.lat = latitude;
        this.long = longitude;
        this.getWeather(this.lat, this.long);
      });
    } else {
      console.log("No support for geolocation")
    }
  }

  getWeather(lat, long){
    this.weatherService.getLocation(lat, long)
      .subscribe((res: any[]) => {
        this.currentWeather = res;
        this.isWeather = true;
        let weather = this.currentWeather.weather[0].main;
        this.searchPainting(weather);
      });
  }

  searchPainting(weather) {
    this.paintService.searchPainting(weather)
      .subscribe((res: any[]) => {
        this.painting = res;
        this.getPainting(this.painting.objectIDs[0]);
      });
  }

  getPainting(id){
    this.paintService.getPainting(id)
      .subscribe((res: any) => {
        this.paintingID = res;
        this.backgroundImage = this.paintingID.primaryImage;
      })
  }
}


