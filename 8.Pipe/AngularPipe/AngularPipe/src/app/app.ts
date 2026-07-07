import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  template: `
              <h1>Pipe</h1>
              <h1>{{name | titlecase | uppercase}}</h1>
              <h1>{{date | date:'dd.MM.yyyy'}}</h1>
              <h1>{{num | currency:'EUR':'symbol-narrow':'1.2-2'}}</h1>
            `
})
export class App {
  name:string="İshak Güzel"
  date:Date=new Date()
  num:number=17002.25
}
