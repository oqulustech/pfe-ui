import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OmniNgModule } from '@cof/omni-ng';
import { OmniFormsModule, OmniMenuButtonModule, OmniIconModule } from '@cof/omni-ng';
import * as icons from '@cof/omni-gravity-icons-templates'


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, OmniNgModule, OmniFormsModule,OmniMenuButtonModule, OmniIconModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  value: string = '';
  selectedValue = 'Select The Pfe Module';

  iconInfo = icons.UiInfoLined
  iconHeart = icons.UiHeartLined
  iconStar = icons.UiStarLined
  options: string[] = [
    'Job Monitor',
    'Risk Reports',
    'Package Tracker',
    'Issue Log',
    'DBMS PgBlazor'
  ];
}