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
      Department : 'IT',
      JoiningDate: '04/15/2016'
    },
    {
      Id: 2,
      Name : 'Mike',
      Age : 35,
      Sal : 30000,
      Department : 'Admin',
      JoiningDate: '02/21/2017'
    },
    {
      Id: 3,
      Name : 'Gates',
      Age : 30,
      Sal : 70000,
      Department : 'IT',
      JoiningDate: '04/18/2015'
    },
    {
      Id: 4,
      Name : 'Robert',
      Age : 30,
      Sal : 40000,
      Department : 'HR',
      JoiningDate: '03/15/2016'
    }
  ];
  
  inputText : string;

  resetEmployees(eventData){
    this.empList = eventData;
  }
}
