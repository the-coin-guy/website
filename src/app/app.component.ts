import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
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
        NavbarComponent,
        PhotoGridComponent,
        RouterOutlet
    ],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.sass"
})

export class AppComponent {
    appName: string = "The Coin Guy";
}
