import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OmniNgModule } from '@cof/omni-ng';
import { OmniAppModule } from '@cof/omni-ng';
import { RouterOutlet } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { OmniContainerModule } from '@cof/omni-ng';



// import components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, OmniNgModule, OmniAppModule, OmniContainerModule, RouterModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pfe-ui';
}


