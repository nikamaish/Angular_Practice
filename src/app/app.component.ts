import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[] = [];
  currentUser: User = { id: 0, name: '', email: '' };
  isEditMode = false;
  showUsers = false; // Controls the visibility of the user list


  

  addUser() {
    if (this.isEditMode) {
      this.updateUser();
    } else {
      this.currentUser.id = this.users.length + 1;
      this.users.push(this.currentUser);
      this.currentUser = { id: 0, name: '', email: '' };
    }
  }
  toggleShowUsers() {
    this.showUsers = !this.showUsers;
  }

  editUser(user: User) {
    this.currentUser = { ...user };
    this.isEditMode = true;
  }

  updateUser() {
    const index = this.users.findIndex(user => user.id === this.currentUser.id);
    if (index !== -1) {
      this.users[index] = this.currentUser;
      this.isEditMode = false;
      this.currentUser = { id: 0, name: '', email: '' };
    }
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
