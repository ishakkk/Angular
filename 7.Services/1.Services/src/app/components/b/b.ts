import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Example } from '../../services/example';
import { Example2 } from '../../services/example2';


@Component({
  selector: 'app-b',
  imports: [FormsModule],
  templateUrl: './b.html',
  styleUrl: './b.css',
})
export class B {
  /**
   *
   */
  constructor(public ex:Example2) {
    
    
  }
  
}
