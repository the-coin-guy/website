import { Component, Inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";

export interface PhotoModalData {
    id: string;
    title: string;
    description: string;
    image: string;
}

@Component({
    selector: "app-photo-modal",
    standalone: true,
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatButtonModule,
        MatDialogActions,
        MatDialogClose
    ],
    templateUrl: "./photo-modal.component.html",
    styleUrl: "./photo-modal.component.css"
})

export class PhotoModalComponent {
    constructor(
        public dialogRef: MatDialogRef<PhotoModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: PhotoModalData) {

    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
