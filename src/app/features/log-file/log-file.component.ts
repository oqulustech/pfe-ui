import { Component } from '@angular/core';
import { OmniTableModule } from '@cof/omni-ng'
@Component({
  selector: 'app-log-file',
  standalone: true,
  imports: [OmniTableModule],
  templateUrl: './log-file.component.html',
  styleUrl: './log-file.component.scss'
})
export class LogFileComponent {

}
