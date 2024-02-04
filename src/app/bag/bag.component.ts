import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit{
  constructor(public storeService: StoreService){}

  ngOnInit(): void {
    this.storeService.sumPrice();
  }

}
