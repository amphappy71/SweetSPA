import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SweetMessageService {

  testobs() {Observable.create(function subscribe(observer) {
    try {
      observer.next(1);
      observer.next(2);
    } catch (error) {
      observer.error(error);
    }
  });
}
}
