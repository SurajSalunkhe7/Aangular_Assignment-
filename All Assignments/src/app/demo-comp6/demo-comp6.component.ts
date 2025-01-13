import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-comp6',
  templateUrl: './demo-comp6.component.html',
  styleUrls: ['./demo-comp6.component.css']
})
export class DemoComp6Component 
{
  public Str:any;

  public SendData(data:any)
  {
    this.Str = data;
  }
}
