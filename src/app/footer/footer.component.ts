import { Component, Input } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrl: "./footer.component.scss"
})
export class FooterComponent {
    @Input() appName!: string;

    currentYear: number;
    githubIcon: IconDefinition;
    mailIcon: IconDefinition;
    githubUrl: string;
    email: string;
    mailHref: string;

    constructor() {
        this.currentYear = new Date().getUTCFullYear();
        this.githubIcon = faGithub;
        this.mailIcon = faEnvelope;
        this.githubUrl = "https://github.com/the-coin-guy/website";
        this.email = "alex@gmail.com";
        this.mailHref = `mailto:${this.email}`;
    }
}
