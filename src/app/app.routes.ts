import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'products', loadComponent: () =>
        import('./product-card/product-card.component')
          .then(m => m.ProductCardComponent)},
    {path: 'products/:id', loadComponent: () =>
        import('./product-detail/product-detail.component').then(m => m.ProductDetailComponent)
    },
    {path: 'contact', loadComponent: () =>
        import('./contact-form/contact-form.component').then(m => m.ContactFormComponent)
    },
    {path: 'about', component: AboutComponent},
    {path: 'login', loadComponent: () =>
        import('./login-form/login-form.component').then(m => m.LoginFormComponent)
    },
    {path: 'register', loadComponent: () =>
        import('./register-form/register-form.component').then(m => m.RegisterFormComponent)
    },
    {path: 'counter', loadComponent: () =>
        import('./counter/counter.component').then(m => m.CounterComponent)
    },
    {path: '**', redirectTo: ''},
];
