import { Component } from '@angular/core';

export interface Card {
  imageUrl: string;
  pet: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  hidden = true;

  toggleCards() {
    this.hidden = !this.hidden;
  }

  updateName(name: string) {
    console.log(name);
  }

  cards: Card[] = [
    {
      imageUrl: 'https://bipbap.ru/wp-content/uploads/2019/07/Krasivye-i-prikolnye-kartinki-dlya-srisovki-dlya-devochek-11-let-10.jpg',
      pet: 'cat'
    },
    {
      imageUrl: 'https://lichnyj-dnevnik.ru/wp-content/uploads/milye-risunki-dlja-srisovki-1.jpg',
      pet: 'frog'
    },
    {
      imageUrl: 'https://i.pinimg.com/originals/e6/48/22/e64822b03df9fb880f7bd0773bbb63e8.jpg',
      pet: 'chick'
    },
    {
      imageUrl: 'https://starwars-galaxy.ru/800/600/https/funpick.ru/wp-content/uploads/2017/11/Milye-karandashom-3.jpg',
      pet: 'bunny'
    },
  ]
}
