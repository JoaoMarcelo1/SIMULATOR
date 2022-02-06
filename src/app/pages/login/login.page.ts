import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { databaseService } from 'src/app/services/database.service';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   form: FormGroup;
   public  userlogin: User = {};
   public  usercadastro: User={};
  constructor(private router: Router , private formBuilder: FormBuilder, private DatabaseService: databaseService ) {
     }
  
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
  
  async loginauth(){
   console.log(this.userlogin);

    try {
      await this.DatabaseService.login(this.userlogin);
    } catch (error) {
      console.error(error);

    }
  }

  cadastroauth(){
    
  }
}
