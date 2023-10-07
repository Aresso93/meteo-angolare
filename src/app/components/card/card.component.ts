import { Component, Input } from '@angular/core';
import { Location } from 'src/app/model/location';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() location?: Location;

}
