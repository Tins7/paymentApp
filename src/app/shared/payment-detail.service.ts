import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { PaymentDetail } from './payment-detail.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  url:string= environment.apiBaseUrl+'/PaymentDetails'
  list:PaymentDetail[] = []
  formData:PaymentDetail = new PaymentDetail()
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  refreshList(){
    this.http.get(this.url)
    .subscribe({
      next: res=>{
        this.list= res as PaymentDetail[]
      },
      error: err=>{console.log(err)}
    })
  }

  postPaymentDetail(){
    return this.http.post(this.url, this.formData)

  }

  resetForm(form:NgForm){
    form.form.reset()
    this.formData = new PaymentDetail()
  }

  showSuccess() {
    this.toastr.success('Message sent successfully!', 'Success');
  }

  showFailed() {
    this.toastr.error('Payment unsucessful!', 'Failed');
  }

}
