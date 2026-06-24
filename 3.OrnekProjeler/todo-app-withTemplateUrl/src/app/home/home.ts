import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

insertData:string="";

toDos:string[]=[];
updateIndex:number=0;
updateData:string="";
isFormUpdate:boolean=false;
  save()
  {
    this.toDos.push(this.insertData)
    this.insertData="";
    
  }
  get(index:number)
  {
    this.updateIndex=index;
    this.updateData=this.toDos[index];
    this.isFormUpdate=true;
  }
  delete(index:number)
  {
    this.toDos.splice(index,1)
  }
  update()
  {
    this.toDos[this.updateIndex]=this.updateData
    this.isFormUpdate=false;
  }
}
