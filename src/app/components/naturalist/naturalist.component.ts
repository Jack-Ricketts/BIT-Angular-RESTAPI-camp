import { Component, OnInit } from '@angular/core';
import { Naturalists } from 'src/app/models/registrationToNaturalists';
import { NaturalistsService } from 'src/app/services/naturalists.service';

@Component({
  selector: 'app-naturalist',
  templateUrl: './naturalist.component.html',
  styleUrls: ['./naturalist.component.css']
})
export class NaturalistComponent implements OnInit {

  public naturalists:Naturalists[]=[];
  constructor( private natService:NaturalistsService) {   }

  ngOnInit(): void {
    this.natService.getNaturalist().subscribe((response)=>{
      this.naturalists=response;
    })
  }
}