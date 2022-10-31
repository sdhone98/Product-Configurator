import { Injectable } from '@angular/core';
import {dataBase} from "./app.component";

@Injectable({
  providedIn: 'root'
})
export class PassDataService {

  constructor() { }

  public data:string = '';
  public passingData:any[] = [];
  public setCardLayout:boolean = false;
  public appTitle:string = '';


  ngOnInit():void{


  }

}
