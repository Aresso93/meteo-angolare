import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Location } from 'src/app/model/location';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  city?: Location

  constructor (private dataServ: DataService)  {}

  ngOnInit():void{
    console.log(this.city);
    this.dataServ.getWeather().subscribe(data =>{
    this.city = data;
    console.log('data', data);
    console.log('this.city', this.city);
    
   })
  }
  
  }


