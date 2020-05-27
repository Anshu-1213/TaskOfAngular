import { Component } from '@angular/core';
import { Users } from './users';

@Component({
  selector: 'app-root',
  template: `
  <div style =" margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;  ">
 
   <select> 
     <option *ngFor = 'let name of users' [value] = "name.Id">
     {{name.Name | CustomUser: name.Id}}
     </option>
   </select>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Users[];
  ngOnInit() {

    this.users = [
      {Id:1, Name: "Anshu Beniwal"},
      {Id:2, Name: "Sweta Kumari"},
      {Id:3, Name: "Sheenam Bee"},
      {Id:4, Name: "Isha Lingayat"},
      {Id:5, Name: "Payal Tomar"}
    ]
  }
}
