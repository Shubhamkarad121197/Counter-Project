import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  counter:any=0;


  increaseCounter(){
    this.counter++;
  }
  decreaseCounter(){
    if(this.counter>0){
      this.counter--;
    }
    
  }
  resetCounter(){
    this.counter=0;
  }
}
