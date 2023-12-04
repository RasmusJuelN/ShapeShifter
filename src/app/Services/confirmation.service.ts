import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  private confirmationSubject = new Subject<boolean>();
  constructor() { }
  getConfirmation() {
      return this.confirmationSubject.asObservable();
  }

  openConfirmation() {
      this.confirmationSubject.next(true);
  }

  closeConfirmation() {
      this.confirmationSubject.next(false);
  }
  
}
