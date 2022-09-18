import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondComponet } from './secondcomponent/second.component';
import { ThirdComponent } from './thirdcomponent/third.component';
@NgModule({
  declarations: [
    AppComponent,
    SecondComponet,
    ThirdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
