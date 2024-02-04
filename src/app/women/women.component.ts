import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
  constructor(public storeService: StoreService){}

}
