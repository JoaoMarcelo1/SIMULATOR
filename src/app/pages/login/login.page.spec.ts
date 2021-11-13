import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule
      
      
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
  
  }));
  //criar forms na inicialização
  it ('should create form on init' , () => {
    component.ngOnInit();
    expect(component.form).not.toBeUndefined();

  }
  )
  //testes
 it ('should go to login page on funcionalidades', () => {
    spyOn(router , 'navigate');
    component.login();
    expect(router.navigate).toHaveBeenCalledWith(['funcionalidades']);
 })
  it('should go to cadastro page on cadastro', ()  => {
    spyOn(router , 'navigate');
    component.cadastro();
    expect(router.navigate).toHaveBeenCalledWith(['cadastro']);

  })
});
