import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { usernameTakenValidator } from './username-async.validator';
import { matchPasswords } from './match-password.validator';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required], [usernameTakenValidator()]],
      passwordGroup: this.fb.group(
        {
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]
        },
        { validators: matchPasswords('password', 'confirmPassword') }
      ),
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        zip: ['', Validators.required]
      })
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Form Submitted:', this.registerForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onSubmitHttp(): void {
    if (this.registerForm.valid) {
      this.userService.registerUser(this.registerForm.value).subscribe({
        next: (res) => console.log('User saved:', res),
        error: (err) => console.error('Error saving user:', err)
      });
    }
  }
  
}
