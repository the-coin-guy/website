import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FaIconComponent, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCoins, faEnvelope } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-navbar",
    standalone: true,
    imports: [
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        FaIconComponent,
        FontAwesomeModule,
        MatInputModule,
        MatButtonToggleModule,
        MatTooltipModule
    ],
    templateUrl: "./navbar.component.html",
    styleUrl: "./navbar.component.scss"
})

export class NavbarComponent {
    @Input() appName!: string;
    appIcon: IconDefinition = faCoins;
    mailIcon: IconDefinition = faEnvelope;
    email: string = "alex@gmail.com";
    mailHref: string = `mailto:${this.email}`;
}
