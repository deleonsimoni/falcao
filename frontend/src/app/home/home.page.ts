import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public options = [
    {
      label: 'Maps',
      page: 'maps'
    },
    {
      label: 'lorem ipsum',
      page: ''
    },
    {
      label: 'lorem ipsum',
      page: ''
    },
    {
      label: 'lorem ipsum',
      page: ''
    }
  ];

  constructor(
    private router: Router
  ) { }

  public navigate(page): void {
    if (page === 'maps') {
      this.router.navigate([`/${page}`]);
    }
  }

}
