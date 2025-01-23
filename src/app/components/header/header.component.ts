import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OmniNgModule } from '@cof/omni-ng';
import { OmniFormsModule, OmniMenuButtonModule } from '@cof/omni-ng';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, OmniNgModule, OmniFormsModule,OmniMenuButtonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  value: string = '';
}