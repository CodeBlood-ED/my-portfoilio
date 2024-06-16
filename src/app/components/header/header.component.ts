import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  options = [
    {"name" : "About",
      "link" : "about"
    },
    {"name" : "Skills",
      "link" : "services"
    },
    {"name" : "Projects",
      "link" : "projects"
    },
    {"name" : "Contact",
    "link" : "contact"
  },
  ];

}
