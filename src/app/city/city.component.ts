import { Component, OnInit } from '@angular/core';
import {City} from '../interfaces/city.interface';
import {CityService} from '../city.service';
import {Observable, Subscription} from 'rxjs';
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
  selectedCity: string;
  ngOnInit(): void {
    this.getCities();
  }
  getCities(): void{
    this.cityService.getCities()
      .subscribe(cities => {
        this.cities = cities;
      });
  }
  getWeather(): void{
    const lat = this.cities.find(el => {
      console.log(el.name);
      console.log(this.selectedCity);
      return el.name === this.selectedCity;
    }).lat;
    const lon = this.cities.find(el => {
      return el.name === this.selectedCity;
    } ).lng;
    this.weatherComponent.getWeather(lat, lon);
  }

}
