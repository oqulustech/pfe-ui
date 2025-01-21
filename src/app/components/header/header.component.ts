import { Component } from '@angular/core';
import { OmniNgModule } from '@cof/omni-ng';
import { OmniFormsModule } from '@cof/omni-ng'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [OmniNgModule, OmniFormsModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
}