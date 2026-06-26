import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { A } from "./components/a/a";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, A],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('1.Service');
}
