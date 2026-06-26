import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Renklendir } from './renklendir';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Renklendir],
  template: `
              <h1 renklendir="green" test="ishak">Directive</h1>
            `
})
export class App {
  
}
