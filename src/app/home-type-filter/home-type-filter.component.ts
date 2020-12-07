import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-type-filter',
  templateUrl: './home-type-filter.component.html',
  styleUrls: ['./home-type-filter.component.scss'],
})
export class HomeTypeFilterComponent implements OnInit {
  @Output() applied = new EventEmitter();
  @Input() defaultFilters: string[] = [];
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.defaultFilters)

    this.form = this.formBuilder.group({
      Apartment: [this.defaultFilters.includes('Apartment')],
      Room: [this.defaultFilters.includes('Room')],
      House: [this.defaultFilters.includes('House')],
    });
  }

  submit(formValue) {
    const homeTypes = Object.keys(formValue).filter((item) => formValue[item]);
    this.applied.emit(homeTypes);
  }
}
