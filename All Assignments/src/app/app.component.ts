import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  Data:any;
  Data1:any;

  public Message2:any;

  public SendData(data:any)
  {
    this.Message2 = data;
  }
  title = 'AllAssignemnts';
}
