import { FormBuilder, FormGroup } from "@angular/forms";
import { loginPageForm } from "./login.page.form";

describe('loginpageform', () =>{
    let loginPageForm: loginPageForm;
    let form: FormGroup;

    beforeEach(() => {
        loginPageForm = new loginPageForm(new FormBuilder());
        form = loginPageForm.CreateForm();
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


})
