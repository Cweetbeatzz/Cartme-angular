import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';
import { ProductsService } from 'src/app/services/Product/products.service';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css']
})
export class ProductByCategoryComponent implements OnInit {

  constructor(private productApi:ProductsService,private alertify: AlertsService,) { }

  ngOnInit(): void {
  }

}
