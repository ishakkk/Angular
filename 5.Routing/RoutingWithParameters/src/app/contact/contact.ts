import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  /**
   *
   */
  constructor(private activated:ActivatedRoute) {
    
    this.activated.params.subscribe((res)=>{
      console.log(res)
    })  
  }
}
