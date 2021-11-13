import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { loginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   form: FormGroup;
  constructor(private router: Router , private formBuilder: FormBuilder) { }
  
  //métodos 
  ngOnInit() {

    this.form = new loginPageForm(this.formBuilder).CreateForm();
  }
  login(){
     this.router.navigate(['funcionalidades']);

  }
   
  cadastro(){
    this.router.navigate(['cadastro']);
  }
}
