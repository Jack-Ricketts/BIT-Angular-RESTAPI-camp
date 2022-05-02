import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-to-naturalist-club',
  templateUrl: './registration-to-naturalist-club.component.html',
  styleUrls: ['./registration-to-naturalist-club.component.css']
})
export class RegistrationToNaturalistClubComponent implements OnInit {
  public naturalistForm:FormGroup;
  
  constructor() { 
    this.naturalistForm=new FormGroup({
      'name':new FormControl(null, [Validators.required, Validators.maxLength(16)]),
      'surname':new FormControl(null, [Validators.required, Validators.maxLength(16)]),
      'email':new FormControl(null, [Validators.required, Validators.email]),
      'grade':new FormControl(null, [Validators.required, this.checkGrade]),
      'allergy':new FormArray([])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.naturalistForm.value);
    this.naturalistForm.reset();
  }

  checkGrade(control:FormControl): {[s:string]:boolean}|null {
    if (control.value>='6' && control.value<='12'){
      return null;
    }else{
      return {'gradeIncorect':true}
    }
  }

  addAllergy(){
    const input=new FormControl(null, Validators.required);
    (<FormArray>this.naturalistForm.get('allergy')).push(input);
  }

  removeAllergy(){
    (<FormArray>this.naturalistForm.get('allergy')).controls.pop();
  }
  get allergies(){
    return (<FormArray>this.naturalistForm.get('allergy')).controls;
  }
}
