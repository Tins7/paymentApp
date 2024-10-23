import { Component } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from '../../shared/payment-detail.model';





@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: ``
})
export class PaymentDetailFormComponent {

  constructor(public service: PaymentDetailService) {

  }






  onSubmit(form: NgForm){

    this.service.postPaymentDetail().subscribe({
      next: res=>{

        this.service.list = res as PaymentDetail[]

        this.service.resetForm(form) // this is used for reset the grid for on submit


      },
      error: err=>{
        console.log(err)
      }
    })

  }

}
