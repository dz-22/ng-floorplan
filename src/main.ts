import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BedroomComponent } from './app/bedroom/bedroom.component';
import { DiningComponent } from './app/dining/dining.component';
import { KitchenComponent } from './app/kitchen/kitchen.component';
import { MastbedroomComponent } from './app/mastbedroom/mastbedroom.component';
import { HallComponent } from './app/hall/hall.component';
import { RouterOutlet } from '@angular/router';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(DiningComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(KitchenComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(MastbedroomComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(HallComponent, appConfig)
  .catch((err) => console.error(err));
