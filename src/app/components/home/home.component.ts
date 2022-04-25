import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/models/registration';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public registrations:Registration[]=[];

  public isLoading:boolean=false;
  public isError:boolean=false;

  constructor(private registrationService:RegistrationService) { }

  private loadData(){
    this.registrationService.getRegistrations().subscribe({
      next:(response)=>{
        this.registrations=response;
        this.isLoading=false;
      },
      error:(error)=>{
        this.isError=true;
        this.isLoading=false;
      }
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  deleteRegistration(id:String){
    this.registrationService.deleteRegistration(id).subscribe((response)=>{
      this.loadData();
    });
  }
}