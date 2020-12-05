import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss'],
})
export class HomesComponent implements OnInit {
  homes$ = this.dataService.getHomes();
  homeTypeDropdownOpen = false;

  constructor(private dataService: DataService, private router: Router ) {}

  ngOnInit(): void {}

  togggleHomeTypeDropdown() {
    this.homeTypeDropdownOpen = !this.homeTypeDropdownOpen;
  }

  homeTypeFilterApplied(filters: string[]) {
    this.homeTypeDropdownOpen = false;
    this.router.navigate(['homes'], { queryParams: { 'home-type': filters } });
  }
}
