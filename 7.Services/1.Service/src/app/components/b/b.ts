import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Example } from '../../services/example';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.html',
  styleUrl: './b.css',
})
export class B {
 ex=inject(Example)
}
