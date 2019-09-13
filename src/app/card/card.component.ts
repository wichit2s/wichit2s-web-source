import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  friends = [
    {
      name: 'Franky Lee Jones',
      pic: 'frank.png',
      position: 'CEO',
    },
    {
      name: 'May Jr Lee',
      pic: 'may.jpg',
      position: 'Secretary',
    },
    {
      name: 'Pat Tracy Johnson',
      pic: 'pat.jpg',
      position: 'IT Support',
    }
  ];

  constructor() {
    // this.image = 'https://wichit2s.gitlab.io/assets/images/paul_logo_96x96.png';
  }

  ngOnInit() {
  }

}
