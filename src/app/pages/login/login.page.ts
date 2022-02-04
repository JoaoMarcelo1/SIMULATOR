import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   form: FormGroup;
  constructor(private router: Router , private formBuilder: FormBuilder, public LoginService: LoginService ) { }
  
  //métodos 
  ngOnInit() {

    this.form = new LoginPageForm(this.formBuilder).createForm();
  }
  login(){
     this.router.navigate(['funcionalidades']);

  }
   
  cadastro(){
    this.router.navigate(['cadastro']);
  }
  LoginUser(value){
    console.log("usuário logado");
    try{
      this.LoginService.loginfireauth(value).then( resp =>{
       console.log(resp);

      })
    }catch(err){

      console.log(err);
    }
  

  }
}
