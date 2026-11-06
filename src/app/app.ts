import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { MenuAdmin } from './menu-admin/menu-admin';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard, MenuAdmin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('admin-estetica-bem-estar');
}
