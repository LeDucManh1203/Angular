import { Component } from '@angular/core';
import { product } from 'src/common/data/mockData';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 product = product;
  

}
