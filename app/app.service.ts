import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  mydata: MyDataType[] = [
    { id: 1, name: 'Aleja' },
    { id: 2, name: 'Giraldo' },
  ];
  constructor() {}

  getUsersForSubscription(): Observable<MyDataType[]> {
    let data = new Observable<MyDataType[]>((observer) => {
      setInterval(() => {
        if (this.mydata[0].id < 20) {
          this.mydata[0].id += 1;
          this.mydata[1].id += 1;
        }
        observer.next(this.mydata);
      }, 2000);
    });
    return data;
  }
}

export class MyDataType {
  public id: number;
  public name: string;
}
