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
  currentSearch = '';
  loading: boolean = true;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const homeTypeFilters = params['home-type'] || [];
      const searchTerm = params.search || '';
      this.dataService.loadHomes(homeTypeFilters, searchTerm);
      this.currentHomeTypeFilters = homeTypeFilters;
      this.currentSearch = searchTerm;
      this.loading = false;
    });
  }

  togggleHomeTypeDropdown() {
    this.homeTypeDropdownOpen = !this.homeTypeDropdownOpen;
  }

  homeTypeFilterApplied(filters: string[]) {
    this.homeTypeDropdownOpen = false;
    const params = this.route.snapshot.queryParams;
    this.router.navigate(['homes'], {
      queryParams: { ...params, 'home-type': filters },
    });
  }

  searchApplied(searchTerm: string) {
    const params = this.route.snapshot.queryParams;
    this.router.navigate(['homes'], {
      queryParams: { ...params, search: searchTerm },
    });
  }
}
