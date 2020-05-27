import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <form>
  <div class = "input">
    <label>Username</label>
    <input type = "text"  [(ngModel)] ="username">
  </div>

   <div class = "input">
    <label>Password</label>
    <input type = "password" [(ngModel)] = "password">
   </div>
   <button (click) = "loginUser(username, password)"  >submit</button>
</form>`,
  styles: [`
    .text-sucess {
      color: green;
    }
    .text-fail {
      color: red;
    }
  `]
})

export class AppComponent implements OnInit {
 username = "Anshu";
 password = "Beniwal";
 successClass = "text-success";
 failClass = "text-fail";

 
loginUser(username, password): string{
  console.log(username)
  console.log(password) 
  if(username == "" && password == "") 
    return "Please fill Username and Password"
  else 
  if(username === this.username && password === this.password) {
    return "Login Successfully";
    
  }
  else if(username !== this.username && password === this.password) {
    return "Please Enter valid username"; 
  }
  else if(username === this.username && password !== this.password) {
   return "Please Enter valid password"; 
  }
  else
  return "Invalid username and password";
  
}
ngOnInit() {

}


}
