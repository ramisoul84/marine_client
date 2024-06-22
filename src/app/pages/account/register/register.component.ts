import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrl: 'register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: this.fb.control('', [Validators.required]),
      lastName: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  onSubmit() {
    console.log(this.registerForm.value);
  }
}
