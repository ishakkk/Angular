import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculate } from "./calculate/calculate";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Calculate],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kredi-uygulamasi-1');
}
