import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutsService } from 'src/app/donuts.service';
import { DonutModel } from 'src/app/Models/donut-model';

@Component({
  selector: 'app-dounut-detail',
  templateUrl: './dounut-detail.component.html',
  styleUrls: ['./dounut-detail.component.css']
})
export class DounutDetailComponent {
  result:DonutModel = {} as DonutModel;
  constructor(private dounutService:DonutsService, private route:ActivatedRoute){}

  ngOnInit(){
  let paramMap = this.route.snapshot.paramMap;
  let id:number = Number(paramMap.get("id"));
  this.dounutService.oneDonuts(id).subscribe((response:DonutModel) =>{
    console.log(response);
    this.result = response;
  })
  }


}    
