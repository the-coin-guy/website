import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FaIconComponent, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-navbar",
    standalone: true,
    imports: [
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        FaIconComponent,
        FontAwesomeModule
    ],
    templateUrl: "./navbar.component.html",
    styleUrl: "./navbar.component.scss"
})

export class NavbarComponent {
    @Input() appName!: string;
    appIcon: IconDefinition = faCoins;
}
