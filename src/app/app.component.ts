//src/app/app.component.ts
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [HomeComponent, AboutComponent, ProjectsComponent, ContactComponent],
    standalone: true,
})
export class AppComponent { }
