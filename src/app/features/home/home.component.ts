import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  selectedLink: string = '';
  constructor(private router: Router) {}

  onChange() { 
    // Handle the change event 
    console.log('Selected value:', this.selectedValue); 
      if (this.selectedValue === 'Select The Pfe Module') { 
        this.router.navigate(['home']); 
      } else if (this.selectedValue === 'Job Monitor') { 
        this.router.navigate(['dashboard']); 
      } 
     } 

     gotoHome () {
      this.router.navigate(['home']); 
     }

     gotoDashboard (link:string) {
      this.selectedLink = link;
      this.router.navigate(['dashboard']); 
     }

     gotoTableView (link:string) {
      this.selectedLink = link;
      this.router.navigate(['job-monitor']); 
     }

     gotoLogFile (link:string) {
      this.selectedLink = link;
      this.router.navigate(['log-file']); 
     }
}
