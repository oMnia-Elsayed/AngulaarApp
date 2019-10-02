import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { ApiService} from '../_service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // loginForm: FormGroup;

  // constructor(private formBuilder: FormBuilder) {}

  // ngOnInit() {
  //   this.loginForm = this.formBuilder.group({
  //     username: this.formBuilder.control(''),
  //     password: this.formBuilder.control('')
  //   });
  // }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm);
  //   }
  // }
  loginForm: FormGroup;
  invalidLogin = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };
    this.apiService.login(loginPayload).subscribe(data => {
      if (data.status === 200) {
        // window.localStorage.setItem('token', data.result.token);
        this.router.navigate(['list-user']);
      } else {
        this.invalidLogin = true;
        alert(data.message);
      }
    });
  }

  ngOnInit() {
    window.localStorage.removeItem('token');

    this.loginForm = this.formBuilder.group({
      // tslint:disable-next-line: max-line-length
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/)]],
      password: ['', [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/)]]
    });
  }
}
