import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = 'USER';

  private role = ['ANONYMOUS', 'USER', 'ADMIN'];

  constructor() { }

  sendRole() {
    // tslint:disable-next-line: triple-equals
    if (!this.user) {
      return this.role[0];
    } else if (this.user === 'USER') {
      return this.role[1];
    } else {
      return this.role[2];
    }
  }
}
