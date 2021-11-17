import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  //criação de parâmetro
  @Input () message: string;
  @Input() field: FormGroup;
  constructor() { }

  ngOnInit() {}
  //declarando a função
  shouldShowComponent(){
    if(this.field.touched && this.field.errors?.required){
      return true;
    }
     return false;
   
  }
}
