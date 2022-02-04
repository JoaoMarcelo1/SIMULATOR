import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/login.service";



export class LoginPageForm{


  private formBuilder : FormBuilder;

  constructor(formBuilder : FormBuilder, public authservice: AuthService){
    this.formBuilder = formBuilder;

  }

 createForm(): FormGroup {
    return this.formBuilder.group({
    email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required]] 
    });
  }

  LoginUser(value){
    console.log("Am logged in");
    try {
      this.authservice.loginFireauth(value).then( resp =>{
        console.log( resp );
      })
    } catch (error) {
      console.log("error");
    }
  }
}
