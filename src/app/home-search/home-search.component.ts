import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss'],
})
export class HomeSearchComponent implements OnInit {
  @Output() applied = new EventEmitter<string>();
  @Input() defaultSearch: string = '';
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      search: [this.defaultSearch],
    });
    this.form
      .get('search')
      ?.valueChanges.subscribe((value) => this.applied.emit(value));
  }
}
