import { NgForOf } from "@angular/common";
import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatGridListModule } from "@angular/material/grid-list";
import { PhotoModalComponent, PhotoModalData } from "../photo-modal/photo-modal.component";

@Component({
    selector: "app-photo-grid",
    standalone: true,
    imports: [
        MatGridListModule,
        NgForOf
    ],
    templateUrl: "./photo-grid.component.html",
    styleUrl: "./photo-grid.component.sass"
})

export class PhotoGridComponent {
    photos: PhotoModalData[];

    constructor(public dialog: MatDialog) {
        this.photos = [
            {
                id: "penny",
                title: "Penny",
                description: "A penny",
                image: "http://placekitten.com/200/300"
            },
            {
                id: "nickel",
                title: "Nickel",
                description: "A nickel",
                image: "http://placekitten.com/200/300"
            },
            {
                id: "dime",
                title: "Dime",
                description: "A dime",
                image: "http://placekitten.com/200/300"
            },
            {
                id: "quarter",
                title: "Quarter",
                description: "A quarter",
                image: "http://placekitten.com/200/300"
            }];
  }

  openDialog(photoId: string): void {
        const dialogRef = this.dialog.open(PhotoModalComponent, {
            // width:  "250px",
            data: getPhotoFromId(photoId, this.photos)
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
            description: "filler data",
            image: "http://placekitten.com/200/300"
        }
    }
};
