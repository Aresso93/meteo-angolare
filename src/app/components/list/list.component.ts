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

  constructor (private data: DataService)  {}

  ngOnInit():void{
   this.data.getWeather().subscribe(data =>{
    this.city = data;
   })
  }
  
  }


