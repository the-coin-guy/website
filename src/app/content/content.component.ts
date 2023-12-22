import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from '@angular/material/tooltip';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { CardDeckComponent } from "../card-deck/card-deck.component";

export type SortByOption = "acquired" | "alpha" | "creation";

@Component({
  selector: 'app-content',
  standalone: true,
    imports: [
        CardDeckComponent,
        MatButtonModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatInputModule,
        FaIconComponent,
        FormsModule,
        MatButtonToggleModule,
        MatIconModule
    ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})

export class ContentComponent {
    filterText: string = "";
    sortOption: SortByOption = "alpha";

    onFilterTextChange(pressedKey: string): void {
        this.filterText = pressedKey;
    }

    onSortByButtonChange(option: SortByOption): void {
        this.sortOption = option;
    }
}
