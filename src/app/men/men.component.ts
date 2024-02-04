import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  constructor(public storeService: StoreService){}


}
