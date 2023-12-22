import { NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

export interface CardData {
    id: string;
    title: string;
    subTitle?: string;
    description?: string;
    imageUrl: string;
    altText: string;
    showActions?: boolean;
    acquired: Date;
    created: Date;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
      MatButtonModule,
      MatCardModule,
      NgIf
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
    @Input() data!: CardData;
}
