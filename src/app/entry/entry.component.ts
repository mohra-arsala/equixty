import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {
  position = new FormControl('', [Validators.required]);
  selectPos = new FormControl('', Validators.required)
  positions: string[] = ['Software Engineer', 'Systems Engineer', 'Cyber Security Consultant'];

  
  // positions = ['Software Engineer', 'Systems Engineer', 'Cyber Security Consultant', 'UI/UX', 'Information Systems Analyst']
  // name = new FormControl('');
}