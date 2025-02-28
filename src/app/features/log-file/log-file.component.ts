import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OmniNgModule } from '@cof/omni-ng';
import { OmniContainerModule } from '@cof/omni-ng';
import {
  OmniAttributeModule,
  OmniAppModule,
  OmniFormsModule,
  OmniLayoutModule,
  OmniTextModule,
  OmniTitleActionModule,
  OmniMenuButtonModule, OmniIconModule,
  OmniTableModule,
  OmniButtonModule
} from '@cof/omni-ng'
import * as icons from '@cof/omni-gravity-icons-templates'

@Component({
  selector: 'app-log-file',
  standalone: true,
  imports: [CommonModule, OmniAttributeModule,
    OmniAppModule,
    OmniFormsModule,
    OmniLayoutModule,
    OmniTextModule,
    OmniTitleActionModule, 
    OmniNgModule, 
    OmniContainerModule, 
    OmniMenuButtonModule, OmniIconModule,
    OmniTableModule,
    OmniButtonModule
    ],
  templateUrl: './log-file.component.html',
  styleUrl: './log-file.component.scss'
})
export class LogFileComponent {

}
