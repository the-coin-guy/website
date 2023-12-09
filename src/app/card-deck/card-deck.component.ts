import { NgForOf, NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";

export interface PhotoModalData {
    id: string;
    title: string;
    subTitle?: string;
    description?: string;
    imageUrl: string;
    altText: string;
    showActions?: boolean;
}

@Component({
    selector: "app-card-deck",
    standalone: true,
    imports: [
        MatGridListModule,
        NgForOf,
        NgIf,
        MatCardModule,
        MatButtonModule
    ],
    templateUrl: "./card-deck.component.html",
    styleUrl: "./card-deck.component.scss"
})

export class CardDeckComponent {
    @Input() filterText!: string;
    cards: PhotoModalData[];

    constructor() {
        this.cards = [
            {
                id: "1984_penny",
                title: "1984 Penny",
                imageUrl: "../../assets/1984_penny.jpeg",
                altText: "A 1984 Penny"
            },
            {
                id: "2016_nickel",
                title: "2016 Nickel",
                imageUrl: "../../assets/2016_nickel.jpeg",
                altText: "A 2016 Nickel",
            },
            {
                id: "1975_dime",
                title: "1975 Dime",
                imageUrl: "../../assets/1975_dime.jpeg",
                altText: "A 1975 Dime"
            },
            {
                id: "1995_quarter",
                title: "1995 Quarter",
                imageUrl: "../../assets/1995_quarter.jpeg",
                altText: "A 1995 Quarter",
            },
            {
                id: "1965_half_dollar",
                title: "1965 Half Dollar",
                imageUrl: "../../assets/1965_half_dollar.jpeg",
                altText: "A 1965 Half Dollar"
            }];
    }

    get filteredCards(): PhotoModalData[] {
        return this.cards.filter(
            (card: PhotoModalData) =>
                card.title
                    .toLowerCase()
                    .includes(
                        this.filterText.toLowerCase()
                    ) ||
                (
                    card.subTitle &&
                    card.subTitle
                        .toLowerCase()
                        .includes(
                            this.filterText.toLowerCase()
                        )
                ) ||
                (
                    card.description &&
                    card.description
                        .toLowerCase()
                        .includes(
                            this.filterText.toLowerCase()
                        )
                )
        );
    }
}
