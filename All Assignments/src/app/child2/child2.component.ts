import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component 
{
  public Message1:any;

  @Output() public Myevent = new EventEmitter();

  public SendData(data:any)
  {
    this.Message1 = data;
    this.Myevent.emit(this.Message1);
  }
  
  @Input() Data2:any;
}
