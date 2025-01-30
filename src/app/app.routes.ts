import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { JobMonitorComponent } from './features/job-monitor/job-monitor.component';

export const routes: Routes = [
    { path: '', component: JobMonitorComponent },
    { path: 'home', component: HomeComponent },
    { path : "job-monitor", component: JobMonitorComponent }
];