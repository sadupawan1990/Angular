import { Component, OnInit } from '@angular/core';

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

employees : any[] = [
  {
    Id: 1,
    Name : 'John',
    Age : 30,
    Sal : 50000,
    Deptartment : 'IT' 
  },
  {
    Id: 2,
    Name : 'Mike',
    Age : 35,
    Sal : 30000,
    Deptartment : 'Admin' 
  },
  {
    Id: 3,
    Name : 'Gates',
    Age : 30,
    Sal : 70000,
    Deptartment : 'IT' 
  },
  {
    Id: 4,
    Name : 'Robert',
    Age : 30,
    Sal : 40000,
    Deptartment : 'HR' 
  }
];

  constructor() { }
  
  ngOnInit(): void {
    
  }

  Reset(){
this.employees =  [
  {
    Id: 8,
    Name : 'John',
    Age : 30,
    Sal : 50000,
    Deptartment : 'IT' 
  },
  {
    Id: 2,
    Name : 'Mike',
    Age : 35,
    Sal : 30000,
    Deptartment : 'Admin' 
  },
  {
    Id: 3,
    Name : 'Gates',
    Age : 30,
    Sal : 70000,
    Deptartment : 'IT' 
  },
  {
    Id: 4,
    Name : 'Robert',
    Age : 30,
    Sal : 40000,
    Deptartment : 'HR' 
  }
];
  }

  trackByEmpId(ind:number, empl :any){
    return empl.id; 
  }

}
