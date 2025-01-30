// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { OmniNgModule } from '@cof/omni-ng'

// @Component({
//   selector: 'app-root',
//   imports: [
//     OmniNgModule,
//     RouterModule
//   ],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
// }

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OmniNgModule } from '@cof/omni-ng'
import { CommonModule } from '@angular/common';
import { OmniAppModule } from '@cof/omni-ng';
import { RouterOutlet } from '@angular/router';
import { OmniContainerModule } from '@cof/omni-ng';
// import components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [OmniNgModule, RouterModule, CommonModule, OmniAppModule, OmniContainerModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pfe-ui';
}