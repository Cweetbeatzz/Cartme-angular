import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Ngrx/store/app.state';
import { AlertsService } from 'src/app/services/Alerts/alerts.service';
import { SweetalertService } from 'src/app/services/Alerts/sweetalert.service';
import { ProductsService } from 'src/app/services/Product/products.service';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.css']
})
export class ProductsDeleteComponent implements OnInit {

  prodId:string = ''
  productDetails : any
  dataLoaded: boolean = false

  constructor(private productApi:ProductsService,private alertify: AlertsService,private router:ActivatedRoute,
    private reroute:Router,private sweetalert:SweetalertService,) { }

  //#########################################################################################


  ngOnInit(): void {
    //#####
    this.dataLoaded = false
    //#####
     this.router.params.subscribe(data =>{
      this.prodId = data.id
    })
    //#####
      if (this.prodId) {
      this.productApi.GetProductById(this.prodId).toPromise().then(prodData =>{
       this.productDetails = prodData 
        Object.assign(this.productDetails, prodData)

      }).catch(err =>{
        console.log(err);
        
      })
      this.dataLoaded = true
    }

  }

  //#########################################################################################

  deleteProduct(){
   if (this.prodId) {

      this.productApi.DeleteProduct(this.prodId).subscribe({
      next:(data)=>{
        this.sweetalert.timedNofication('Product Deleted!😊')
        this.reroute.navigate(['/products'])
      },
      error:(err)=>{
        this.alertify.error(err || 'Unable to Delete 😢!!!')
      }
    })

   }
  }

}
