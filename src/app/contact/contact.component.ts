import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})

export class ContactComponent {
  APP_NAME = 'PORTFOLIO';
  MY_EMAIL = 'nikuzejl@gmail.com'
  FORM_URL = 'https://formsubmit.co/'
  name = '';
  email = '';
  message = '';
  successMessage = '';

  @ViewChild('form') form!: NgForm;

  constructor(private http: HttpClient) {}

  submitForm() {
    if (!this.name || !this.email || !this.message) {
      return;
    }

    const formData = {
      name: this.name,
      email: this.email,
      message: this.message,
      _captcha: 'false',
      _subject: this.name + ' reached out to you on ' + this.APP_NAME,
    };

    const urlEncodedData = this.toUrlEncoded(formData);

    this.http.post(this.FORM_URL + this.MY_EMAIL, urlEncodedData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      responseType: 'text',
    }).subscribe({
      next: () => {
        this.successMessage = `Thanks ${this.name}! Your message was sent. I will get back to you as soon as possible.`;
        this.form.resetForm();
        setTimeout(() => {
          this.successMessage = '';
        }, 15000);
      },
      error: (err) => {
        console.error(err);
        this.successMessage = 'Something went wrong. Please try again.';
        setTimeout(() => {
          this.successMessage = '';
        }, 4000);
      },
    });
  }

  private toUrlEncoded(obj: Record<string, any>): string {
    return Object.entries(obj)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join('&');
  }
}