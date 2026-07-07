import { Service } from '@angular/core';
import {  signal } from '@angular/core';
@Service()
export class Example2 {


     work: string = "";
     todo = signal<string[]>([]);

     save(){
        this.todo.update(list => [...list, this.work]);
        this.work = "";
        alert("KAYDINIZ EKLENDİ");
}
}