import {Component} from '@angular/core'/// defining component

@Component({
  selector: 'hello',///custom html tag
  template: '<strong>Hello World</strong>' //template will be render once html tag excuted.
})
export class HelloWorldComponent{  /// class needs to be act as an component by decorating @ to component

}
