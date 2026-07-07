import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Example 
{
     work: string = "";
     todo = signal<string[]>([]);

     save(){
        this.todo.update(list => [...list, this.work]);
        this.work = "";
        alert("KAYDINIZ EKLENDİ");
     }
}