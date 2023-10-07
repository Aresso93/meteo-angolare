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
   return this.http.get<Location>(this.BASE_URL+'latitude=44.4048&longitude=8.9444&hourly=temperature_2m').pipe(
      tap(data => console.log('locazione', data)),
      map(data => data)
    
   )}

   getLocationWeather(locationLatitude:string, locationLongitude:string):Observable<Location>{
    return this.http.get<Location>(this.BASE_URL+'latitude='+locationLatitude+'&longitude='+locationLongitude)
   }

}

//let latitude = location.latitude
//let longitude = location.longitude

//this.BASE_URL+'latitude='+ latitude +'&longitude='+ longitude