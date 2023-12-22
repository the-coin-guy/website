import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-footer",
    standalone: true,
    imports: [
        MatIconModule,
        FontAwesomeModule,
        MatButtonModule,
        MatTooltipModule
    ],
    templateUrl: "./footer.component.html",
    styleUrl: "./footer.component.scss"
})

export class FooterComponent {
    @Input() appName!: string;
    currentYear: number = new Date().getUTCFullYear();
    githubIcon: IconDefinition = faGithub;
    mailIcon: IconDefinition = faEnvelope;
    githubUrl: string = "https://github.com/the-coin-guy/website";
    email: string = "alex@gmail.com";
    mailHref: string = `mailto:${this.email}`;
}
