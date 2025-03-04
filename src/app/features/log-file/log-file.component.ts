import { Component, OnInit } from '@angular/core';
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
export class LogFileComponent implements OnInit {
  files: any[] = [];

  ngOnInit() {
    this.genereateRandomDate();
  }

  genereateRandomDate() {
    const fileNames = ['entrypoint', 'envconsul', 'fire', 'Bogiefile', 'JobMonitor'];
    const sizes = [12607640, 10739864, 10711192, 7222, 708584];
    const lastModifiedDates = [
      '11/15/2024 14:29',
      '11/14/2024 08:45',
      '11/26/2024 15:30',
      '02/05/2025 16:30',
      '02/05/2025 16:33'
    ];

    for (let i = 0; i < fileNames.length; i++) {
      this.files.push({
        name: fileNames[i],
        size: sizes[i],
        lastModified: lastModifiedDates[i]
      });
    }
  }


}
