import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  resumeUrl = 'assets/resume.pdf';

  openResume() {
    window.open(this.resumeUrl, '_blank');
  }
}
