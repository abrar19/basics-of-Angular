import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserCardComponent } from "./user-card/user-card.component";
import { ProductCardComponent } from "./product-card/product-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent, ProductCardComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
