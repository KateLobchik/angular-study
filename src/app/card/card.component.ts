import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../app.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})


export class CardComponent implements OnInit {

  @Input() card: Card | null = null;
  @Input() index: number | null = null;
  @Output() name = new EventEmitter<string>();

  cardColor = 'yellow'

  private _title = '';
  set title(value: string) {
    this._title = value;
    this.name.emit(value)
  }
  get title() {
    return this._title;
  }

  myImgUrl: any;
  pet: any


  // disabled = false;
  ngOnInit() {
    this.pet = this.card?.pet;
    this.myImgUrl = this.card?.imageUrl;
    this._title = 'Name your ' + this.pet;
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
