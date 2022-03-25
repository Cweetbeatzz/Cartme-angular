import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Ngrx/store/app.state';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';
import { ProductsService } from 'src/app/services/Product/products.service';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.css']
})
export class ProductsDeleteComponent implements OnInit {

  prodId:string = ''

  constructor(private productApi:ProductsService,private alertify: AlertsService,private router:ActivatedRoute,
    private reroute:Router) { }

  //#########################################################################################


  ngOnInit(): void {
     this.router.params.subscribe(data =>{
      this.prodId = data.id
    })

  }

  //#########################################################################################

  deleteProduct(){
   if (this.prodId) {

      this.productApi.DeleteProduct(this.prodId).subscribe({
      next:(data)=>{
        this.alertify.success('Product Deleted!')
        this.reroute.navigate(['/products'])
      },
      error:(err)=>{
        this.alertify.error('Unable to Delete!!!')
      }
    })

   }
  }

}
