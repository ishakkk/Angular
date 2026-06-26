import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Example {
  work: string = '';
  todos: string[] = [];

  save(): void {
    const value = this.work.trim();

    if (!value) {
      return;
    }

    this.todos.push(value);
    this.work = '';
  }
}