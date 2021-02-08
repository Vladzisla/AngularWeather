import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {City} from './interfaces/city.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private readonly http: HttpClient) { }

  // @ts-ignore
  getCities(): Observable<City[]>  {
    return this.http.get('https://gist.githubusercontent.com/alex-oleshkevich/6946d85bf075a6049027306538629794/raw/3986e8e1ade2d4e1186f8fee719960de32ac6955/by-cities.json')
    .pipe(
      map(data => {
        const cities: City[] = [];

        const a = data[0];
        for (const region of a.regions){
          for (const city of region.cities){
            cities.push(city);
          }
        }
        return cities;
      })
    );
  }
}
