import { NgForOf, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialog } from "@angular/material/dialog";
import { MatGridListModule } from "@angular/material/grid-list";
import { PhotoModalComponent } from "../photo-modal/photo-modal.component";

export interface PhotoModalData {
    id: string;
    title: string;
    description?: string;
    image: string;
    altText: string;
}

@Component({
    selector: "app-photo-grid",
    standalone: true,
    imports: [
        MatGridListModule,
        NgForOf,
        NgIf,
        MatCardModule,
        MatButtonModule
    ],
    templateUrl: "./photo-grid.component.html",
    styleUrl: "./photo-grid.component.scss"
})

export class PhotoGridComponent {
    cards: PhotoModalData[];

    constructor(public dialog: MatDialog) {
        this.cards = [
            {
                id: "penny",
                title: "Penny",
                image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
                altText: "A penny"
            },
            {
                id: "nickel",
                title: "Nickel",
                image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
                altText: "A nickel"
            },
            {
                id: "dime",
                title: "Dime",
                image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
                altText: "A dime"
            },
            {
                id: "quarter",
                title: "Quarter",
                image: "https://material.angular.io/assets/img/examples/shiba2.jpg",
                altText: "A quarter"
            }];
  }

  openDialog(photoId: string): void {
        const dialogRef = this.dialog.open(PhotoModalComponent, {
            // width:  "250px",
            data: getPhotoFromId(photoId, this.cards)
        });

        dialogRef.afterClosed().subscribe(_ => {
            console.log("The dialog was closed");
        });
  }
}

const getPhotoFromId = (photoId: string, photos: PhotoModalData[]): PhotoModalData => {
    const photo = photos.filter((p) => p.id === photoId);
    if (photo.length > 0) {
        return photo[0];
    } else {
        return {
            id: "abc",
            title: "BLANK",
            image: "http://placekitten.com/200/300",
            altText: "An image"
        }
    }
};
