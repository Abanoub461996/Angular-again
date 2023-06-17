import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit():void {
    this.registerForm = this.fb.group({
      registerName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern('')],
      ],
      registerEmail: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      registerPass: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
      registerConfirmPass: ['', [Validators.required]]
    },{
      validator: this.passwordsMatched
    })
  }
  passwordsMatched(fm: FormGroup) {
    return fm.controls['registerPass'].value == fm.controls['registerConfirmPass'].value ? null : { mismatch: true }
  }
  get registerFormControls() {
    return this.registerForm.controls;
  }
  handleRegister():void{
    const userData:any={...this.registerForm.value,"avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867"}
    console.log(userData);
    
  }

}
