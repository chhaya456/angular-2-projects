import {NgModule} from '@angular/core';//taking features from library , decorate class
import {BrowserModule} from '@angular/platform-browser';// defining app is based on browser.
import {HelloWorldComponent} from './helloworld.component';// importing here for javascript module


@NgModule({  //this is for class which  has to be decorate by ngmodule
  imports: [BrowserModule], // this is for angular framework,declaring app wil be based on browser
  declarations: [HelloWorldComponent], //declaring here for anglar module, to say use this component for this module
  bootstrap: [HelloWorldComponent] //start your module with this component
})

export class AppModule{      //root module, module bootstraping

}
