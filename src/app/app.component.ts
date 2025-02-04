import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ProjectsComponent } from './projects/projects.component';
// import { ContactComponent } from './contact/contact.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    openPdf() {
        window.open('assets/resume.pdf', '_blank');
      }
}
