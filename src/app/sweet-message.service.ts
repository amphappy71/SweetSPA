import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SweetMessageService {

  private subject = new Subject<any>();

  add(message: string) {
    this.subject.next({text: message});
  }

  clear() {
    this.subject.next();
  }

  getMessages(): Observable<any> {
    return this.subject.asObservable();
  }

}
