import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CadastroPageForm } from './cadastro.page.form';
import { User } from '@firebase/auth';




@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
//esse codigo faz parte da autenticação
user = {} as User;
 







  form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.form = new CadastroPageForm(this.formBuilder).createForm();
  }
  cadastro(){
    this.router.navigate(['funcionalidades']);

  }
}
