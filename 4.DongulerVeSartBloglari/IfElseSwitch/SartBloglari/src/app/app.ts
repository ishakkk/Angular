import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  template:`
            <h1>Şart Yazıları</h1>
            @if (showFirstWord)
               {
                   <p style="color: {{showFirstWord===true ? 'red' : ''}};">Birinci Yazı</p>
               }
           @if(showSecondWord){
                    <p style="color: green;">İkinci Yazı</p>
           }
           
            <hr>
            <button (click)="show(1)">Birinci Yazıyı Göster</button>
            <button (click)="show(2)">İkinci Yazıyı Göster</button>
          `
})
export class App {
  showFirstWord:boolean=false;
  showSecondWord:boolean=false


  show(num:number){
    if(num===1){
      this.showFirstWord=true;
      this.showSecondWord=false;
    }
    else
      {
        this.showFirstWord=false;
        this.showSecondWord=true;
      }

      switch(num){
        case 1:
            this.showFirstWord=true;
            this.showSecondWord=false;
            break;
        case 2: this.showFirstWord=false;
                 this.showSecondWord=true;
                  break;
        default:
         break;
      }
  }
}
