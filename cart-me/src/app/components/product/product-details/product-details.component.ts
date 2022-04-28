import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/models/Products/products';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';
import { ProductsService } from 'src/app/services/Product/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  prodId:string = ''
  prodDetails!: any;

   //#########################################################################################

  constructor(private productApi:ProductsService,private alertify: AlertsService,private router:ActivatedRoute) { }

   //#########################################################################################

  ngOnInit(): void {
    this.router.params.subscribe(data =>{
      this.prodId = data.id
    })

    if (this.prodId) {
       this.productApi.GetProductById(this.prodId).subscribe({
      next:(data)=>{
        this.prodDetails = data
        console.log(this.prodDetails)
      },
      error:(err)=>{
        this.alertify.error(err)
      }
    })
    }
  }
 //#########################################################################################

}
