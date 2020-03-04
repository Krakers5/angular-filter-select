import { ApiService } from './services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users: any;
  filteredUsers: any;

  constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.api.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
    })
  }

  filterUsersByName(name: string) {
    this.filteredUsers = this.users.filter(user =>  user.name.toLowerCase().includes(name));
}

}
