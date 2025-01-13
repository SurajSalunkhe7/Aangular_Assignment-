import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { FirstComp1Component } from './first-comp1/first-comp1.component';
import { SecondComp1Component } from './second-comp1/second-comp1.component';
import { FirstComp2Component } from './first-comp2/first-comp2.component';
import { SecondComp2Component } from './second-comp2/second-comp2.component';
import { DemoCompComponent } from './demo-comp/demo-comp.component';
import { DemoComp2Component } from './demo-comp2/demo-comp2.component';
import { DemoComp3Component } from './demo-comp3/demo-comp3.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { FirstComp3Component } from './first-comp3/first-comp3.component';
import { SecondComp3Component } from './second-comp3/second-comp3.component';
import { DemoComp4Component } from './demo-comp4/demo-comp4.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { DemoComp5Component } from './demo-comp5/demo-comp5.component';
// import { DemoComp4Component } from './demo-comp4/demo-comp4.component';
import { FormsModule } from '@angular/forms';
import { DemoComp6Component } from './demo-comp6/demo-comp6.component';
import { DemoComp7Component } from './demo-comp7/demo-comp7.component';
// import { ArithmaticComponent } from './arithmatic/arithmatic.component';
import { ArithmaticService } from './arithmatic.service';
import { First3Component } from './first3/first3.component';
import { First4Component } from './first4/first4.component';
import { Secnd3Component } from './secnd3/secnd3.component';
import { First5Component } from './first5/first5.component';
import { Secnd4Component } from './secnd4/secnd4.component';
import { DemoComp8Component } from './demo-comp8/demo-comp8.component';
import { DemoComp9Component } from './demo-comp9/demo-comp9.component';
import { DemoComp10Component } from './demo-comp10/demo-comp10.component';
import { First6Component } from './first6/first6.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    FirstComp1Component,
    SecondComp1Component,
    FirstComp2Component,
    SecondComp2Component,
    DemoCompComponent,
    DemoComp2Component,
    DemoComp3Component,
    NewCompComponent,
    FirstComp3Component,
    SecondComp3Component,
    DemoComp4Component,
    ChildComponent,
    Child2Component,
    DemoComp5Component,
    DemoComp6Component,
    DemoComp7Component,
    First3Component,
    First4Component,
    Secnd3Component,
    First5Component,
    Secnd4Component,
    DemoComp8Component,
    DemoComp9Component,
    DemoComp10Component,
    First6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ArithmaticService],
  bootstrap: [AppComponent]
})
export class AppModule { }
