import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent{

  user: User = {
    name: '',
    email: '',
    age: ''
  };

  constructor(private userService: UserService){
    this.user = this.userService.getUser();
  }

  ngOnInit() {
    this.userService.userName$.subscribe(value => {
      this.user = value;
    });
  }

  sayHello(){
    alert(`Hello ${this.user.name}`);
  }
}
