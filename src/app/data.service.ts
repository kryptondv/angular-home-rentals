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

  loadHomes(homeTypeFilters: string[]) {
    this.homes$.next([])
    this.httpClient.get<Home[]>('assets/homes.json').subscribe((homes) => {
      this.homes$.next(
        homeTypeFilters.length > 0
          ? homes.filter((home) => homeTypeFilters.includes(home.type))
          : homes
      );
    });
  }
}
