import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  name: string = '';
  designation: string = '';
  gender: string = '';
  dob: string = '';
  email: string = '';
  phonenumber: string = '';


  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      'name': [null, [Validators.pattern("[a-zA-Z0-9 ]+"),Validators.required]],
      'designation': [null, Validators.required],
      'gender': [null, Validators.required],
      'dob': [null, Validators.required],
      'email': [null, [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.required]],
      'phonenumber': [null, [Validators.pattern("[0-9]{10}"),Validators.required]]
    });
  }


  ngOnInit(): void { }
  submit() {
    console.log("formvalue", this.registerForm.value);
    this.router.navigate(['/submit', JSON.stringify(this.registerForm.value)])
          }
   

  

}

