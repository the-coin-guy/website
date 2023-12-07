import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
    selector: "app-navbar",
    standalone: true,
    imports: [
        MatIconModule,
        MatToolbarModule,
        MatButtonModule
    ],
    templateUrl: "./navbar.component.html",
    styleUrl: "./navbar.component.sass"
})

export class NavbarComponent {
    @Input() appName!: string;

    icon: string = "savings"; // "monetization_on" , "store"
}
