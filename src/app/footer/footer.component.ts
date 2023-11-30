import { Component, Input } from "@angular/core";

@Component({
    selector: "app-footer",
    standalone: true,
    imports: [],
    templateUrl: "./footer.component.html",
    styleUrl: "./footer.component.css"
})

export class FooterComponent {
    @Input() appName!: string;
    currentYear: number = new Date().getUTCFullYear();
}
