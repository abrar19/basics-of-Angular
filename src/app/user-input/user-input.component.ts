import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  user: User = {
    name: '',
    email: '',
    age: ''
  };

  constructor(private userService: UserService) {}

  updateUser() {
    this.userService.updateUser(this.user);
  }
}
