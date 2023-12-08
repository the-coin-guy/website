import { Component } from '@angular/core';
import { PhotoGridComponent } from "../photo-grid/photo-grid.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
      PhotoGridComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})

export class ContentComponent {}
