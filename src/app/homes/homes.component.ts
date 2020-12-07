import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss'],
})
export class HomesComponent implements OnInit {
  homes$ = this.dataService.homes$;
  homeTypeDropdownOpen = false;
  currentHomeTypeFilters = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const homeTypeFilters = params['home-type'] || [];
      this.dataService.loadHomes(homeTypeFilters);
      this.currentHomeTypeFilters = homeTypeFilters;
    });
  }

  togggleHomeTypeDropdown() {
    this.homeTypeDropdownOpen = !this.homeTypeDropdownOpen;
  }

  homeTypeFilterApplied(filters: string[]) {
    this.homeTypeDropdownOpen = false;
    this.router.navigate(['homes'], { queryParams: { 'home-type': filters } });
  }

  searchApplied(searchTerm: string) {
    this.router.navigate(['homes'], { queryParams: { search: searchTerm } });
  }
}
