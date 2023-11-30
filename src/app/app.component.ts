import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PhotoGridComponent } from "./photo-grid/photo-grid.component";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [
        CommonModule,
        FooterComponent,
        MatSlideToggleModule,
        NavbarComponent,
        PhotoGridComponent,
        RouterOutlet
    ],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css"
})

export class AppComponent {
    title: string = "The Coin Guy";
}
