import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 users = [
    { nom: 'Anis', age: 29, email: 'anis@fsb.ucar.tn' },
    { nom: 'Fatma', age: 24, email: 'fatma@fsb.ucar.tn' },
    { nom: 'Mohamed', age: 30, email: 'kamel@fsb.ucar.tn' }
  ];

  reset() {
    this.users = [];
  }
}
