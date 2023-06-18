import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/api/auth/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder,private auth:AuthenticationService,private router:Router) {}

  ngOnInit():void {
    this.registerForm = this.fb.group({
      registerName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern('')],
      ],
      registerEmail: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      registerPass: ['', [Validators.required]],
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
    const userData:any={
      name:this.registerForm.value.registerName,
      email:this.registerForm.value.registerEmail,
      password:this.registerForm.value.registerPass,
      "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867"}
console.log(userData);

    this.auth.register(userData).pipe(
      map(data=>{
        console.log(data);
        
      })
    )
    .subscribe((data:any)=>{
      console.log(data);
      this.router.navigate(['/login'])
    })
  }
}
