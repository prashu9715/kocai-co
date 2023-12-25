import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent {
  showMenu = false;
  constructor(private router: Router) {}

  onLogoClick() {
    this.router.navigate(['']);
  }
  menuItems = [
    { label: 'Home', path: 'home' },
    { label: 'Products', path: 'products' },
    { label: 'About us', path: 'about-us' },
    { label: 'Contact', path: 'contact' },
  ];

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
