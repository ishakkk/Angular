import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { About } from "./about/about";
import { Contact } from "./contact/contact";
import { NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [NgClass,NgStyle,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  helloWorld:string="Hello World From FASLI"

  pClassName:string="red"
  clickMe(){
    alert("SAOL FASLI")
  }
  changeHelloWorldVariable(event:any){
    this.helloWorld=event.target.value;
  }
  pSetElementClass(){
    return "blue"
  }
  bgcolor="red";

  checkActive(){
    return this.bgcolor==='blue';
  }
  mySelect:string="";
}
