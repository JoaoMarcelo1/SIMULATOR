import { FormBuilder, FormGroup } from "@angular/forms";
import { CadastroPageForm } from "./cadastro.page.form";

describe('CadastroPageForm', () => {

    let loginPageForm: CadastroPageForm;
    let form: FormGroup;

    beforeEach(() => {
        loginPageForm = new CadastroPageForm(new FormBuilder());
        form = loginPageForm.createForm();
    })
 
     it('should create login form empty', () =>{
      
      expect(form).not.toBeNull();
      expect(form.get('email')).not.toBeNull();
      expect(form.get('email').value).toEqual("");
      expect(form.get('email').valid).toBeFalsy();
      expect(form.get('password')).toBeNull();
      expect(form.get('password').value).toEqual("");
      expect(form.get('password').valid).toBeFalsy();
   
     })

     it('should have email invalid if email is not valid', () => {
        form.get('email').setValue('invalid email');

        expect(form.get('email').valid).toBeFalsy();

     })
     //testar a validade do email
     it ('should have email valid if email is valid', () =>{
       form.get('email').setValue('valid@email.com');
       expect(form.get('email').valid).toBeTruthy();

     }
    )
    //teste para se todos campos foram preenchidos corretamente
    it('should have a valid form', () => {
    form.get('email').setValue('valid@email.com');
    form.get('password').setValue('anyPAssword');
    expect(form.valid).toBeTruthy();

    })


})
