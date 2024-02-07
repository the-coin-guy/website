import { Component } from '@angular/core';

export type SortByOption = "acquired" | "alpha" | "creation";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
    filterText: string;
    sortOption: SortByOption;

    constructor() {
        this.filterText = "";
        this.sortOption = "alpha";
    }

    onFilterTextChange(pressedKey: string): void {
        this.filterText = pressedKey;
    }

    onSortByButtonChange(option: SortByOption): void {
        this.sortOption = option;
    }
}
