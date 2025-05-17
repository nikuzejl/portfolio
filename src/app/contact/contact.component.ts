import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  MY_EMAIL = 'nikuzejl@gmail.com'
  FORM_SUBMIT_URL = 'https://formsubmit.co/'
  SUBJECT = 'Email from portfolio site';
  name = '';
  email = '';
  message = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    if (!this.name || !this.email || !this.message) {
      alert('Please fill out all fields.');
      return;
    }

    const formData = {
      name: this.name,
      email: this.email,
      message: this.message,
      _captcha: 'false',
      _subject: 'Email portfolio site',
    };

    const urlEncodedData = this.toUrlEncoded(formData);

    this.http
      .post(this.FORM_SUBMIT_URL + this.MY_EMAIL, urlEncodedData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        responseType: 'text',
      })
      .subscribe({
        next: () => {
          alert(`Thanks ${this.name}! Your message was sent. I will get back to you as soon as possible.`);
          this.name = '';
          this.email = '';
          this.message = '';
        },
        error: (err) => {
          console.error(err);
          alert('Something went wrong. Please try again.');
        },
      });
  }

  private toUrlEncoded(obj: Record<string, any>): string {
    return Object.entries(obj)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join('&');
  }

  
}
