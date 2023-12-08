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
import { PhotoModalData } from "../photo-grid/photo-grid.component";

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
    styleUrl: "./photo-modal.component.scss"
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
