import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/app/shared/models/budget-item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  addItem(payload) {
    this.formSubmit.emit(payload);
  }

}
