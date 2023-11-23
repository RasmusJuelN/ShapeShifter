import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSignupPage!: boolean;

  constructor(private route: ActivatedRoute) {
    // Subscribe to route changes
    this.route.url.subscribe(urlSegments => {
      // Check if the current route is '/signup'
      this.isSignupPage = urlSegments.length > 0 && urlSegments[0].path === 'signup';
    });
  }
}
