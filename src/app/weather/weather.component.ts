import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class AppComponent {
  title = 'the weather';

  city: string = '';
  weatherData: any;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe(
      (data) => {
        this.weatherData = data;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'City not found. Please try again';
        this.weatherData = null;
      }
    );
  }
}
