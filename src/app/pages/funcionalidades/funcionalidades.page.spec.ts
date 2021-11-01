import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import { FuncionalidadesPage } from './funcionalidades.page';
import { AppRoutingModule } from 'src/app/app-routing.module';

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
});
