import { Component, OnInit } from '@angular/core';
import {City} from '../interfaces/city.interface';
import {CityService} from '../city.service';
import { Observable } from 'rxjs';
import {WeatherComponent} from '../weather/weather.component';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})


export class CityComponent implements OnInit {
  cities: City[];

  constructor(private cityService: CityService, private weatherComponent: WeatherComponent) { }
  selectedCity: any;
  ngOnInit(): void {
    this.getCities();
  }
  getCities(): void{
    this.cityService.getCities()
      .subscribe(cities => this.cities = cities);
  }
  getWeather(): void{
    const lat = this.cities.find(el => {
      return el.name = this.selectedCity.name;
    } ).lat;
    const lon = this.cities.find(el => {
      return el.name = this.selectedCity.name;
    } ).lng;
    this.weatherComponent.getWeather(lat, lon);
  }

}
