import { Component, Input } from "@angular/core";

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
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
    @Input() data!: CardData;
}
