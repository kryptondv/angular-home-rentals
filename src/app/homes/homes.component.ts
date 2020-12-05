import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss'],
})
export class HomesComponent implements OnInit {
  homes$ = this.dataService.getHomes();
  homeTypeDropdownOpen = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  togggleHomeTypeDropdown() {
    this.homeTypeDropdownOpen = !this.homeTypeDropdownOpen;
  }
}
