import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // contact_title= "Contact us";
  // subject= new FormControl();
  // message= new FormControl();
  // sent_message:boolean = false;

  clickedContact = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleClick(){
    this.clickedContact = this.clickedContact ? false : true;
  }
  // isValidInput(){   
  //   return !(this.subject.invalid || this.message.invalid)
  // }
}
