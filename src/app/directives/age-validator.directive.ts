import { Directive } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[AgeValidator]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting:AgeValidatorDirective,
      multi:true
    }
  ]
})

export class AgeValidatorDirective implements Validator{

  constructor() { }
  validate(control: FormControl): ValidationErrors | null {
    let age:number=control.value;
    let ageValidate:number=new Date().getFullYear() - age;
    if(ageValidate < 12 || ageValidate > 18){
      return {'error':'Error'};
    }
    return null;
  }
}
