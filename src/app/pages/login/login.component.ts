import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };
  onSubmit() {
    if (!this.user.email || !this.user.password) {
      alert('Please enter your email and password');
    } else {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user));
    }
  }
}
