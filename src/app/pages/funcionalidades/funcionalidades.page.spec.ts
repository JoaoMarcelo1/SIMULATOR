import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import { FuncionalidadesPage } from './funcionalidades.page';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { componentFactoryName } from '@angular/compiler';

describe('FuncionalidadesPage', () => {
  let component: FuncionalidadesPage;
  let fixture: ComponentFixture<FuncionalidadesPage>;
  let router : Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionalidadesPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FuncionalidadesPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to login page on funcionalidades' , () =>{
    spyOn(router ,'navigate');
    component.funcionalidades();
    expect(router.navigate).toHaveBeenCalledWith(['funcionalidades']);
  })

  it('shoud go to meus-dados after button meus dados in page funcionalidades', () =>{
    spyOn(router, 'navigate');
    component.funcionalidade1();
    expect(router.navigate).toHaveBeenCalledWith(['meus-dados']);
  })

  it('shoud go to tela-jogo after button iniciar ', () =>{
    spyOn(router, 'navigate');
    component.funcionalidade2();
    expect(router.navigate).toHaveBeenCalledWith(['meus-dados']);
  })

});
   
  