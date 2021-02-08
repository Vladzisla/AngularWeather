import { Component, OnInit } from '@angular/core';
import {City} from '../interfaces/city.interface';
import {CityService} from '../city.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})


export class CityComponent implements OnInit {
  cities: City[];

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.getCities();
  }
  getCities(): void{
    this.cityService.getCities()
      .subscribe(cities => this.cities = cities);
  }

}
