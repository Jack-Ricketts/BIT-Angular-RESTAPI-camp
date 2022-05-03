import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from 'src/app/models/registration';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration-to-naturalist-club',
  templateUrl: './registration-to-naturalist-club.component.html',
  styleUrls: ['./registration-to-naturalist-club.component.css']
})
export class RegistrationToNaturalistClubComponent implements OnInit {
  public naturalistForm:FormGroup;
  
  constructor(private regAct:RegistrationService, private router:Router) { 
    this.naturalistForm=new FormGroup({
      'name':new FormControl(null, [Validators.required, Validators.maxLength(16)]),
      'surname':new FormControl(null, [Validators.required, Validators.maxLength(16)]),
      'email':new FormControl(null, [Validators.required, Validators.email]),
      'grade':new FormControl(null, [Validators.required, this.checkGrade]),
      'allergy':new FormArray([]),
      'activity':new FormArray([]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.regAct.addActivities(this.naturalistForm.value).subscribe((response)=>{
      this.router.navigate(["/"]);
    });
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

  addActivity(){
    const activity=new FormGroup({
      duration: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      area: new FormControl(null, Validators.required)
    });
    (<FormArray>this.naturalistForm.get('activity')).push(activity);
  }

  removeAllergy(){
    (<FormArray>this.naturalistForm.get('allergy')).removeAt(-1);
  }

  get allergies(){
    return (<FormArray>this.naturalistForm.get('allergy')).controls;
  }

  get activities(){
    return (<FormArray>this.naturalistForm.get('activity')).controls;
  }

  toFromGroup(element:AbstractControl):FormGroup{
    return <FormGroup>element;
  }
}
