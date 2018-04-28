import { Component, OnInit, NgModule, OnDestroy } from '@angular/core';
import { SweetMessageService } from '../sweet-message.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sweet-nav',
  templateUrl: './sweet-nav.component.html',
  styleUrls: ['./sweet-nav.component.css']
})


export class SweetNavComponent implements OnDestroy {
  message: any;
  newMessage: any;
  subscription: Subscription;

  constructor(private sweetmessage: SweetMessageService) {
    this.subscription = this.sweetmessage.getMessages().subscribe(message => { this.message = message; });
  }

  sendMessage(newMessage): void {
    this.sweetmessage.add(newMessage);
  }

  getMessage() {
    return this.sweetmessage.getMessages().subscribe(message => { this.message = message; });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
