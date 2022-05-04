import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Naturalists } from '../models/registrationToNaturalists';

@Injectable({
  providedIn: 'root'
})
export class NaturalistsService {

  private readonly url:String="https://scoutcamp-1abe1-default-rtdb.europe-west1.firebasedatabase.app/"; 

  constructor(private http:HttpClient) { 

  }

  public addNewNaturalist(naturalist:Naturalists){
    return this.http.post<{name:string}>(this.url+"/naturalist.json",naturalist);
  }

  public getNaturalist(){
    return this.http.get<{[key:string]:Naturalists}>(this.url+"/naturalist.json").pipe(map((response)=>{
      const naturalists:Naturalists[]=[];
      for(let key in response){
        naturalists.push({...response[key],id:key})
      }
      return naturalists;
    }))
  }

  public isCouponAvailable(coupon:String){
    return this.http.get<number|null>(this.url+"/coupons/"+coupon+".json").pipe(
      map((response)=>{
        if (response==null){
          return false;
        }else{
          return true;
        }
      }));
  }

  public decreaseCoupons(coupon:string){
    return this.http.patch(this.url+"/coupons.json", {[coupon]:0});
  }
}
