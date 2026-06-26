import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
              <h1>Directive</h1>
              <form>
                <input type="text" required minlength="3">
                <button (keyup)="checkInpuValidation($event)" type="submit">Send</button>
              </form>
            `,

})
export class App {
    checkInpuValidation(event:any){
      console.log(event.target.validity.valid)
    }
}
