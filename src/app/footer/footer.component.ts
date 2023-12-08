import { Component, Input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: "app-footer",
    standalone: true,
    imports: [
        MatIconModule,
        FontAwesomeModule
    ],
    templateUrl: "./footer.component.html",
    styleUrl: "./footer.component.scss"
})

export class FooterComponent {
    @Input() appName!: string;
    currentYear: number = new Date().getUTCFullYear();
    githubIcon: IconDefinition = faGithub;
}
