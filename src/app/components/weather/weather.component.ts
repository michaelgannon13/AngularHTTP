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
        console.log('weather array contains ' + this.weather);
      })
  }

}

// public getAlbums () {
//   this.albumsService.getAlbums()
//     .subscribe((res: any[]) => {
//       this.albums = res;
//     });
// }

