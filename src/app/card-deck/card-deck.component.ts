import { NgForOf, NgIf } from "@angular/common";
import { Component } from "@angular/core";
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
    cards: PhotoModalData[];

    constructor() {
        this.cards = [
            {
                id: "penny",
                title: "Penny",
                subTitle: "Hello world",
                imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
                altText: "A penny"
            },
            {
                id: "nickel",
                title: "Nickel",
                imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
                altText: "A nickel",
                description: "Hello there!"
            },
            {
                id: "dime",
                title: "Dime",
                imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
                altText: "A dime"
            },
            {
                id: "quarter",
                title: "Quarter",
                imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
                altText: "A quarter",
                showActions: true
            },

            {
                id: "penny",
                title: "Penny",
                subTitle: "Hello world",
                imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
                altText: "A penny"
            },
            {
                id: "nickel",
                title: "Nickel",
                imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
                altText: "A nickel",
                description: "Hello there!"
            },
            {
                id: "dime",
                title: "Dime",
                imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
                altText: "A dime"
            },
            {
                id: "quarter",
                title: "Quarter",
                imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
                altText: "A quarter",
                showActions: true
            } ];
    }
}
