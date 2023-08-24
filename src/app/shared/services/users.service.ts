import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() { }

  addUser(userName: string){
    let userArray = this.users$.value;
    this.users$.next([...userArray, userName]);
  }
}
