import { CommonModule, NgForOf, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { FaIconComponent, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppComponent } from './app.component';
import { CardDeckComponent } from "./card-deck/card-deck.component";
import { CardComponent } from "./card/card.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
    declarations: [
        NavbarComponent,
        AppComponent,
        FooterComponent,
        ContentComponent,
        CardDeckComponent,
        CardComponent
    ],
    imports: [
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        FaIconComponent,
        FontAwesomeModule,
        MatInputModule,
        MatButtonToggleModule,
        MatTooltipModule,
        BrowserModule,
        CommonModule,
        RouterOutlet,
        MatIconModule,
        FontAwesomeModule,
        MatButtonModule,
        MatTooltipModule,
        MatButtonModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatInputModule,
        FaIconComponent,
        FormsModule,
        MatButtonToggleModule,
        MatIconModule,
        MatGridListModule,
        NgForOf,
        MatButtonModule,
        MatCardModule,
        NgIf
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
