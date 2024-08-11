import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  } from "module";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './weather/weather.component.html',
  styleUrl: './weather/weather.component.scss'
})
export class AppComponent {
  title = 'weather-dashboard';
}
