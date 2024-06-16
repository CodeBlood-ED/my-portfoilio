import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent {

  contactForm = new FormGroup({
    fullname : new FormControl(),
    email : new FormControl(),
    desc : new FormControl()
  })

}
