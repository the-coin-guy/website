import { Component, Input, OnInit } from "@angular/core";
import { CardData } from "../card/card.component";
import { SortByOption } from "../content/content.component";
import { GSheetService } from '../../services/gsheet.service';


const filterByContainText = (filterText: string) => (card: CardData) =>
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

const sortBy = (sortByOption: SortByOption): (card1: CardData, card2: CardData) => number => {
    if (sortByOption === "creation") {
        return sortByCreated;
    } else if (sortByOption === "acquired"){
        return sortByAcquired;
    } else { // alpha
        return sortAlpha;
    }
};

const sortByCreated = (card1: CardData, card2: CardData) =>
        card1.created.getTime() - card2.created.getTime();

const sortByAcquired = (card1: CardData, card2: CardData) =>
    card1.acquired.getTime() - card2.acquired.getTime();

const sortAlpha = (card1: CardData, card2: CardData) => {
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
    templateUrl: "./card-deck.component.html",
    styleUrl: "./card-deck.component.scss"
})
export class CardDeckComponent implements OnInit {
    @Input() filterText!: string;
    @Input() sortOption!: SortByOption;

    cards: CardData[];

    constructor(private gsheetService: GSheetService) {
        this.cards = [
            {
                id: "1984_penny", // make uuid
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

    ngOnInit() {
        this.gsheetService.getMyData().subscribe(
            data => {
                console.log('Data received:', data);
                // Handle the data here
            },
            error => {
                console.error('Error:', error);
                // Handle the error here
            }
        );
    }

    get filteredCards(): CardData[] {
        return this.cards
            .filter(filterByContainText(this.filterText))
            .sort(sortBy(this.sortOption));
    }
}
