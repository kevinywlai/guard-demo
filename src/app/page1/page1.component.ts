import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-page1',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.sass'
})
export class Page1Component {

}
