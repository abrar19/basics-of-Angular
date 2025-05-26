import { Component } from '@angular/core';
import { UserCardComponent } from "../user-card/user-card.component";
import { UserInputComponent } from "../user-input/user-input.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserCardComponent, UserInputComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
