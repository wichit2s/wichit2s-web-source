import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  users: any

  constructor(private http: HttpClient) {
    this._getUsers()
  }

  _getUsers() {
    this.http.post(
      'http://cs.sci.ubu.ac.th:7512/59110440084/user/_search',
      {
        query: {
          wildcard: {
            user: { value: '*an*' }
          }
        }
      }
    ).subscribe( data => {
      this.users = data['result']['hits']
      console.log(this.users)
    }, error => {});
  }

  getFriends() {
    return this.friends;
  }
}
