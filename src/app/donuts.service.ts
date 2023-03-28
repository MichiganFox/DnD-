import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DonutModel } from './Models/donut-model';
import { Onedonut } from './Models/onedonut';


@Injectable({
  providedIn: 'root'
})
export class DonutsService {
  [x: string]: any;
    url: string ="https://grandcircusco.github.io/demo-apis/donuts"

  constructor(private http:HttpClient) { }
  getDonuts():Observable<DonutModel>{
    return this.http.get<DonutModel>(`${this.url}.json`)
  }

  oneDonuts(id:number):Observable<DonutModel>{
    return this.http.get<DonutModel>(`${this.url}/${id}.json`)
  }
}
