import { Component, OnInit } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo-comp7',
  templateUrl: './demo-comp7.component.html',
  styleUrls: ['./demo-comp7.component.css']
})
export class DemoComp7Component implements OnInit
{
  public Add:any;
  public Sub:any;
  constructor(private _Obj:ArithmaticService)
  {

  }

  ngOnInit(): void 
  {
    this.Add = this._Obj.Addition(30,20);
    this.Sub = this._Obj.Substraction(30,20);
  }
}
