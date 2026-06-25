import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  template:`
            <h1>Döngüler</h1>
            <ul>
              @for (item of todos; track item)
               {
                <li>İndex: {{$index}} || İlk Kayıt Mı :  {{$first}} Son Kayıt Mı : {{$last}} Veri: {{item.work}}</li>
               }
            </ul>
            
          `

})
export class App {
 
  todos:ToDoModel[]=[
    {work:"Example 1",isCompleted:true},
    {work:"Example 2",isCompleted:false},
    {work:"Example 3",isCompleted:true},
    {work:"Example 4",isCompleted:false},
  ]

  constructor(){
    this.save();
  }
  save(){
    for(let i=0;i<10;i++){
      console.log(i);
    }
   
    console.log("-----------------------")
    for(let i=0;i<this.todos.length;i++){
      console.log(this.todos[i].work);
    }
  console.log("-----------------------")
    this.todos.forEach((val)=>{
      console.log(val.work);
      console.log(val.isCompleted)
    })

  console.log("-----------------------")
    for(let data of this.todos){
      console.log(data.work);
      console.log(data.isCompleted);
    }
  console.log("-----------------------")
    for(let index in this.todos){
      console.log(this.todos[index].work);
    }
  }
}

export class ToDoModel{
  work:string="";
  isCompleted:boolean=false
}
