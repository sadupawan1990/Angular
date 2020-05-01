import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent {

  @Input() inputValue : string;
  contentLength : string;

  constructor() { 
    console.log('Constructor');
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes : SimpleChanges): void {
    console.log('NgOnChanges');
    console.log(changes);
    if(this.inputValue && this.inputValue.length > 5){
      this.contentLength = 'long';
    }else{
      this.contentLength = 'short';
    }
  }

}
