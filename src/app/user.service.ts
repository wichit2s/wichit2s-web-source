import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  friends = [
    {
      name: 'Franky Lee Jones',
      pic: 'frank.png',
      position: 'CEO',
    },
    {
      name: 'Alice in Wonderland',
      pic: 'alisa.jpg',
      position: 'Secretary',
    },
    {
      name: 'Pat Tracy Johnson',
      pic: 'pat.jpg',
      position: 'IT Support',
    }
  ];

  constructor() { }

  getFriends() {
    return this.friends;
  }
}
