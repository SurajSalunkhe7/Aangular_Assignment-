import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService 
{
   constructor() { }

  public Addition(No1:any , No2:any)
  {
    return No1 + No2;
  }

  public Substraction(No1:any , No2:any)
  {
    return No1 - No2;
  }
}
