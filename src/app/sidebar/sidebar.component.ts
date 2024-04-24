import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  navLinks = [
    { path: "/home", icon: 'home.svg' },
    { path: "/discover", icon: 'trending.svg' },
    { path: "/analysis", icon: 'pie.svg' },
    { path: "/bank", icon: 'bank.svg' },
    { path: "/wallet", icon: 'wallet.svg' },
    { path: "/security", icon: 'sheild.svg' },
  ]


}
