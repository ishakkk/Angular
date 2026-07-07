import { Component } from '@angular/core';
import { Example } from '../../services/example';
import { Example2 } from '../../services/example2';
import { B } from '../b/b';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-a',
  imports: [B,FormsModule],
  templateUrl: './a.html',
  styleUrl: './a.css',
})
export class A {
  /**
   *
   */
  constructor(public ex:Example2) {
        
  }
}
