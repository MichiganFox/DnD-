import { Component, Input } from '@angular/core';
import { CsHallOfFameService } from 'src/app/cs-hall-of-fame.service';
import { Complete, DevModel } from 'src/app/Models/cshall-of-fame';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent {
  result:DevModel = {} as DevModel;
constructor(private devService:CsHallOfFameService){}

ngOnInit(){
  this.devService.getDevs().subscribe((response:DevModel)=>{
    console.log(response);
    this.result = response;
  });
  
  }





}
