import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  location = new FormControl('', [Validators.required]);
  selectLoc = new FormControl('', Validators.required)
  locations: string[] = ['San Francisco', 'New York City', 'Seattle', 'Los Angeles', 'Austin'];

}
