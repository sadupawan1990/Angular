import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  title = "MyAngular";

 
  isgreen=true;
  isbold=true;
  isitalic=true;
  issize=true;

  cssClasses= "green bold fontsize";

  cssClassesObj = {
    green : true,
    bold: false,
    italic:true,
    fontsize:true
  }

  cssArray = ['green','fontsize'];

  scolor="blue";

  sstring = "color:red;font-weight: bold;";

  sobj = {
    'color': 'green',
    'font-weight':'bold',
    'font-size':'3rem',
    'font-style':'italic'
  }

@Input() employees : any[];

@Output() onReset : EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor() { }
  
  ngOnInit(): void {
    
  }

  Reset(){
    this.onReset.emit([]);
  }

  trackByEmpId(ind:number, empl :any){
    return empl.id; 
  }

}
