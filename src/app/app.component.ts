import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  empList =   [
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
  
  resetEmployees(eventData){
    this.empList = eventData;
  }
}
