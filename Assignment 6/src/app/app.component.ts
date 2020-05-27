import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fruits: Array<String> = ['Mango', 'Grapes', 'Strawberry', 'Oranges'];
  selectedFruitValues = [];
  favFruitsError: Boolean = true;
  isEdit: boolean;
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email:['',[Validators.required, Validators.email]],
      pass: ['', [ Validators.required,
      Validators.minLength(6)]],
      gndr:['', Validators.required],
      //check:[''],
      se:[''],
      favFruits: this.addFruitsControls(),
      alternateEmails: this.fb.array([])
    }, );

    

  }

  get userName() {
    return this.registrationForm.get('userName');
  }

  get pass() {
    return this.registrationForm.get('pass');
  }


  get email() {
    return this.registrationForm.get('email');
  }
  get gndr() {
    return this.registrationForm.get('gndr');
  }

  get select() {
    return this.registrationForm.get('select');
  }


  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }
  
  get fruitsArray() {
    return <FormArray>this.registrationForm.get('favFruits');
  }

  addAlternateEmail(arr?: any[]) {
   if (arr) 
      this.alternateEmails.push(this.fb.control(arr));
    else 
      this.alternateEmails.push(this.fb.control(''));
   
  }

  removeEmail(i) {
    this.alternateEmails.removeAt(i);

  }
  
  addFruitsControls() {
    const arr = this.fruits.map(item => {
      return this.fb.control(false);
    });

    return this.fb.array(arr);
  }

  checkFruitControlsTouched() {
    let flg = false;
    this.fruitsArray.controls.forEach(control => {
      if (control.touched) {
        flg = true;
      }
    });

    return flg;
  }

  getSelectedFruitsValue() {
    this.selectedFruitValues = [];
    this.fruitsArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedFruitValues.push(this.fruits[i]);
       }
    });

    this.favFruitsError =  this.selectedFruitValues.length > 0 ? false : true;
  }

  

    loadAPIData() {
      const editData = JSON.parse(localStorage.getItem('key'))
      if(editData) {
      this.registrationForm.patchValue(editData);
      editData.email.forEach(data => this.addAlternateEmail(data));
      const newItem = this.selectedFruitValues;
      console.log({...this.registrationForm.value,newItem});
    }
 }

  onSubmit() {
    const newItem = this.selectedFruitValues;
    console.log({...this.registrationForm.value,newItem});
    localStorage.setItem('key' , JSON.stringify({...this.registrationForm.value,newItem}))
    this.registrationForm.reset();
    this.isEdit = true; 
  }

} 