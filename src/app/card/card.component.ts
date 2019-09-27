import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  friends: any

  constructor(private user: UserService) {
  }

  ngOnInit() {
    this.friends = this.user.getFriends();
  }

}
