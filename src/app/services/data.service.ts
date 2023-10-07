import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 readonly BASE_URL = 'https://api.open-meteo.com/v1/forecast?'

  constructor(private http: HttpClient) {
    this.getWeather()
   }

  getWeather():Observable<Location>{
   console.log('culo');
   return this.http.get<Location>('https://api.open-meteo.com/v1/forecast?latitude=44.4048&longitude=8.9444&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,cloudcover,windspeed_10m').pipe(
      tap(data => console.log('locazione', data)),
      map(data => data)
    
   )}
}
