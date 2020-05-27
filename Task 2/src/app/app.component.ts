import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <table border = "1" align = "center">
  <tr>
    <td>First Name</td>
    <td>Last Name</td>
    <td>Age</td>
    <td>Mobile Number</td>
  </tr>
  <tr *ngFor = "let obj of model">
      <td>{{obj.firstName}}</td>
      <td>{{obj.lastName}}</td>
      <td>{{obj.age}}</td>
      <td>{{obj.mbNum}}</td>
  </tr>
</table>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  //title = 'Array';

  model:any;

 ngOnInit() {
   this.model = 
   [
     {
       firstName: "Anshu",
       lastName : "Beniwal",
       age : 20,
       mbNum: "9897867566"
     },

     {
      firstName: "Mionika",
      lastName : "Beniwal",
      age : 24,
      mbNum: "9897676986"
    },

    {
      firstName: "Pravesh",
      lastName : "Beniwal",
      age : 17,
      mbNum: "4597867566"
    },

    {
      firstName: "Sweta",
      lastName : "Kumari",
      age : 20,
      mbNum: "897867566"
    },

    {
      firstName: "Sheenam",
      lastName : "Bee",
      age : 20,
      mbNum: "457867566"
    }
   ]
 }
}
