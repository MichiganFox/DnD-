import { Component, Input } from '@angular/core';
import { CsHallOfFameService } from 'src/app/cs-hall-of-fame.service';
import { Complete, DevModel } from 'src/app/Models/cshall-of-fame';

@Component({
  selector: 'app-famous-person-detail',
  templateUrl: './famous-person-detail.component.html',
  styleUrls: ['./famous-person-detail.component.css']
})
export class FamousPersonDetailComponent {
  @Input() Person: Complete = {} as Complete;

  display:boolean = false;

  toggleDisplay():void{
    this.display = !this.display;
  }


}
