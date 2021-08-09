import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})


export class CardComponent implements OnInit {

  @Input() card: Card | null = null
  @Input() index: number | null = null


  cardColor = 'yellow'
  title: any;
  myImgUrl: any;
  pet: any


  // disabled = false;
  ngOnInit() {
    this.pet = this.card?.pet;
    this.myImgUrl = this.card?.imageUrl;
    this.title = 'Name your ' + this.pet;
  }


  allCardColor() {
    return {
      red: this.cardColor === 'red',
      blue: this.cardColor === 'blue',
      green: this.cardColor === 'green',
      yellow: this.cardColor === 'yellow'
    }
  }

  changeTitle() {
    this.title = 'Lola '
  }

  inputHandler(value: any) {
    this.title = value;
  }
}
