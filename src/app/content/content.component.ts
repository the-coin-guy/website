import { Component } from '@angular/core';
import { CardDeckComponent } from "../card-deck/card-deck.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
      CardDeckComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})

export class ContentComponent {}
