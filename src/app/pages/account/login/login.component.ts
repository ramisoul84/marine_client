import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = signal(true);
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide);
    event.stopPropagation();
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
