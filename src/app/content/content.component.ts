import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { CardDeckComponent } from "../card-deck/card-deck.component";

@Component({
  selector: 'app-content',
  standalone: true,
    imports: [
        CardDeckComponent,
        MatFormFieldModule,
        MatInputModule,
        FaIconComponent,
        FormsModule
    ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})

export class ContentComponent {
    filterIcon: IconDefinition = faFilter;
    filterText: string = "";

    onFilterTextChange(pressedKey: string): void {
        console.log({pressedKey});
        this.filterText = pressedKey;
    }
}
