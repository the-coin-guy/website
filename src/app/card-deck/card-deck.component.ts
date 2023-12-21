import { NgForOf, NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { SortByOption } from "../content/content.component";

export interface PhotoModalData {
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

const filterByContainText = (filterText: string) => (card: PhotoModalData) =>
        card.title
            .toLowerCase()
            .includes(
                filterText.toLowerCase()
            ) ||
        (
            card.subTitle &&
            card.subTitle
                .toLowerCase()
                .includes(
                    filterText.toLowerCase()
                )
        ) ||
        (
            card.description &&
            card.description
                .toLowerCase()
                .includes(
                    filterText.toLowerCase()
                )
        );

const sortBy = (sortByOption: SortByOption): (card1: PhotoModalData, card2: PhotoModalData) => number => {
    if (sortByOption === "creation") {
        return sortByCreated;
    } else if (sortByOption === "acquired"){
        return sortByAcquired;
    } else { // alpha
        return sortAlpha;
    }
};

const sortByCreated = (card1: PhotoModalData, card2: PhotoModalData) =>
        card1.created.getTime() - card2.created.getTime();

const sortByAcquired = (card1: PhotoModalData, card2: PhotoModalData) =>
    card1.acquired.getTime() - card2.acquired.getTime();

const sortAlpha = (card1: PhotoModalData, card2: PhotoModalData) => {
    if (card1.title < card2.title) {
        return -1;
    }
    if (card1.title > card2.title) {
        return 1;
    }
    return 0;
};

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
    @Input() sortOption!: SortByOption;
    cards: PhotoModalData[];

    constructor() {
        this.cards = [
            {
                id: "1984_penny",
                title: "1984 Penny",
                imageUrl: "../../assets/1984_penny.jpeg",
                altText: "A 1984 Penny",
                acquired: new Date(2021, 0, 28, 22, 10),
                created: new Date(1984, 11, 15),
            },
            {
                id: "2016_nickel",
                title: "2016 Nickel",
                imageUrl: "../../assets/2016_nickel.jpeg",
                altText: "A 2016 Nickel",
                acquired: new Date(2022, 5, 1),
                created: new Date(2016, 6),
            },
            {
                id: "1975_dime",
                title: "1975 Dime",
                imageUrl: "../../assets/1975_dime.jpeg",
                altText: "A 1975 Dime",
                acquired: new Date(2023, 8, 22),
                created: new Date(1975),
            },
            {
                id: "1995_quarter",
                title: "1995 Quarter",
                imageUrl: "../../assets/1995_quarter.jpeg",
                altText: "A 1995 Quarter",
                acquired: new Date(2023, 10, 4),
                created: new Date(1995, 2),
            },
            {
                id: "1965_half_dollar",
                title: "1965 Half Dollar",
                imageUrl: "../../assets/1965_half_dollar.jpeg",
                altText: "A 1965 Half Dollar",
                acquired: new Date(2023, 11, 26),
                created: new Date(1965),
            }];
    }

    get filteredCards(): PhotoModalData[] {
        return this.cards
            .filter(filterByContainText(this.filterText))
            .sort(sortBy(this.sortOption));
    }
}
