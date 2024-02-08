import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BedroomComponent } from './bedroom/bedroom.component';
import { BathroomComponent } from './bathroom/bathroom.component';
import { MastbedroomComponent } from './mastbedroom/mastbedroom.component';
import { HallComponent } from './hall/hall.component';
import { KitchenComponent } from './kitchen/kitchen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BedroomComponent,BathroomComponent,MastbedroomComponent,HallComponent,KitchenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'instagram';
}
