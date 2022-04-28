import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SweetalertService {

  constructor() { }

    // #####################################

  timedNofication(message?:string) { 
    Swal.fire({
      title: 'Hello!',
      text: message,
      timer: 4000
    })
  }

    // #####################################

  deleteNotification(message?:string) { 
    Swal.fire({
      title: 'Are you Sure?',
      text: 'You will not be able to revert back!!!',
      icon: 'warning',
      showCancelButton:true,
      confirmButtonText:'Yes delete it!',
      cancelButtonText:'No keep it!',
    }).then((result)=>{
      if (result.value) {
        Swal.fire(
          'Deleted',
          'Your data is deleted!!!',
          'success'
        )
      }
      else if(result.dismiss === Swal.DismissReason.cancel){
        Swal.fire(
          'Cancelled',
          'Deletion process cancelled!!!',
          'error'
        )
      }
    })
  }
  // #####################################

  updateNotification(message?:string){
    
  }

  // #####################################

  createNotification(message?:string){}
}
