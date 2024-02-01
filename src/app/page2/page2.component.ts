import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-page2',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.sass'
})
export class Page2Component {

}
