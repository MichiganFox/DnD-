import { Component } from '@angular/core';
import { DonutsService } from 'src/app/donuts.service';
import { DonutModel } from 'src/app/Models/donut-model';

@Component({
  selector: 'app-doughnuts',
  templateUrl: './doughnuts.component.html',
  styleUrls: ['./doughnuts.component.css']
})
export class DoughnutsComponent {
 constructor(private donutService:DonutsService){}

 ngOnInit(){
  this.someDonuts();
 }
 result:DonutModel = {} as DonutModel;

  someDonuts(){
    this.donutService.getDonuts().subscribe((response:DonutModel) => {
      this.result=response;
    });
  }
}
