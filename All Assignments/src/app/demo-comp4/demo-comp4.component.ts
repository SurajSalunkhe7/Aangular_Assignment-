import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-comp4',
  templateUrl: './demo-comp4.component.html',
  styleUrls: ['./demo-comp4.component.css']
})
export class DemoComp4Component 
{
  public Str:string = '';
  public Upper:string = "";
  public Lower:string = "";

  public Fun()
  {
    return 'Marvellous Infosystems';
    
  }
  public SendData()
  {
    this.Str="Marvellous Infosystems";
  }

  public UpperCase()
  {
    this.Upper =  "Marvellous Infosystems".toUpperCase();
  }

  public LowerCase()
  {
    this.Lower =  "Marvellous Infosystems".toLowerCase();
  }
}
