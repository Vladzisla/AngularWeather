import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Weather} from './interfaces/weather.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private readonly http: HttpClient) { }
  getWeather(lat, lon): Observable<Weather>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=46328ad92c021e6aea74dfd00146a214&units=metric`)
      .pipe(
        map(
          (data: any) => {
            // tslint:disable-next-line:prefer-const new-parens
          let weather: Weather = new class implements Weather {
            pressure: any;
            temperature: any;
            weather: any;
            wind: any;
          };
          weather.weather = data.weather[0].description;
          weather.temperature = data.main.temp;
          weather.pressure = data.main.pressure;
          weather.wind = data.wind.speed;
          return weather;
        }
      ));
  }
}
