import { Component, OnInit } from '@angular/core';
import {City} from '../interfaces/city.interface';
import {CityService} from '../city.service';
import { Observable } from 'rxjs';
import {WeatherComponent} from '../weather/weather.component';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})


export class CityComponent implements OnInit {
  cities: City[];

  constructor(private cityService: CityService, weatherComponent: WeatherComponent) { }

  ngOnInit(): void {
    this.getCities();
  }
  getCities(): void{
    this.cityService.getCities()
      .subscribe(cities => this.cities = cities);
  }
  getWeather(): void{
    this.weatherComponent.getWeather()
  }

}
