import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../students.service';

interface Students {
  studentID: number,
  name: string,
  age: number,
  email: string,
  number: number
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  student: Students[] = [];
  signUpForm!: FormGroup;

    constructor(
      private fb: FormBuilder,
      private StudentsService: StudentsService
    ) {}

    ngOnInit(): void{
      this.signUpForm = this.fb.group({
        studentID: '',
        name: '',
        age: '',
        email: ['', [Validators.required, Validators.email]],
        number: ['', [Validators.required, Validators.maxLength(10)]],
      });
    }
    
    onSubmit(): void {
      if(this.signUpForm.valid) {
        const {studentID, name, age, email, number } = this.signUpForm.value;
        console.log('Sign-Up Data: ', {studentID, name, age, email, number });
        
        this.StudentsService.addStudent({studentID, name, age, email, number }).subscribe(student => {
          this.student.push(student);
        })
      } else {
        console.log("Validation Failed")
      }
    }
}
