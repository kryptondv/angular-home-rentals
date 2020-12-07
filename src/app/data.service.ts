import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Home } from './home.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  homes$ = new BehaviorSubject<Home[]>([]);
  constructor(private httpClient: HttpClient) {}

  loadHomes(homeTypeFilters: string[], searchTerm: string) {
    this.homes$.next([]);
    this.httpClient.get<Home[]>('assets/homes.json').subscribe((homes) => {
      let filteredHomes = homes;
      if (homeTypeFilters.length > 0) {
        filteredHomes = homes.filter((home) => homeTypeFilters.includes(home.type))
      }
      if (searchTerm) {
        filteredHomes = filteredHomes.filter((home) =>
          home.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      this.homes$.next(filteredHomes);
    });
  }
}
