import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionalidades',
  templateUrl: './funcionalidades.page.html',
  styleUrls: ['./funcionalidades.page.scss'],
})
export class FuncionalidadesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  funcionalidades(){
     this.router.navigate(['funcionalidades']);
  }
  funcionalidade1(){
    this.router.navigate(['meus-dados']);
  }
  funcionalidade2(){
    this.router.navigate(['tela-jogo']);
  }
     
}
