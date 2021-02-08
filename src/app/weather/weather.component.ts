import { Component, OnInit } from '@angular/core';
import {Weather} from '../interfaces/weather.interface';
import {WeatherService} from '../weather.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  data: Weather;
  data$: Observable<Weather>;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {

  }

  getWeather(lat, lon): void {
      this.weatherService.getWeather(lat, lon)
      .subscribe(weather => {this.data = weather;
                             console.log('Data: ' + this.data.weather); });
  }
}
