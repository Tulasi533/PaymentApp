import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Sender } from 'src/app/sender';
import { SenderServiceService } from 'src/app/sender-service.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css'],
  providers: [
    SenderServiceService
  ],
})
export class SenderComponent implements OnInit {

  // senderCheckOutForm = new FormGroup({
  //   //custid: new FormControl(null, [Validators.required, Validators.minLength(7), this.custIdValidator()]),
  //   // email: new FormControl('abc@xyz.com', [Validators.required, Validators.pattern(this.Email_regex)]),
  //   // pincode: new FormControl(null, [Validators.required, this.getSender()]),
  // });

  sender!: any;
  customerId!: string;

  constructor(
    private senderService: SenderServiceService, 
    private router: Router,
  ) { }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("CHANGES", changes);
  // }

  ngOnInit(): void {
    // this.getSender();
  }

  goToReceiver(): void {
    this.router.navigateByUrl('transaction/receiver');
  }
  getSender() {
    this.senderService.getSender(this.customerId).subscribe(
      (data) => {
        console.log('SUCCESS', data);
        this.sender = data as Sender;
      },
      (error) => {
        console.log('ERROR', error);
      }
    );
  }

  // custIdValidator() {
    
  //   return (control: FormControl) => {
  //     s: Sender;
  //     const s = this.senderService.getSender(control.value);
  //     console.log(s);
  //   }
  // }



}
