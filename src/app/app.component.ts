import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        RouterOutlet,
        ContentComponent
    ],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss"
})

export class AppComponent {
    appName: string = "The Coin Guy";
}
