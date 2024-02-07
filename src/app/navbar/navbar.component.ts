import { Component, Input } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCoins, faEnvelope } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrl: "./navbar.component.scss"
})
export class NavbarComponent {
    @Input() appName!: string;

    appIcon: IconDefinition;
    mailIcon: IconDefinition;
    email: string;
    mailHref: string;

    constructor() {
        this.appIcon = faCoins;
        this.mailIcon = faEnvelope;
        this.email = "alex@gmail.com";
        this.mailHref = `mailto:${this.email}`;
    }
}
