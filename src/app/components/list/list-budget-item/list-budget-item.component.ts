import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/app/shared/models/budget-item';

@Component({
  selector: 'app-list-budget-item',
  templateUrl: './list-budget-item.component.html',
  styleUrls: ['./list-budget-item.component.scss']
})
export class ListBudgetItemComponent implements OnInit {

  @Input() isIncome: boolean = true;
  @Input() item: BudgetItem;

  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteBudgetItem(payload) {
    this.delete.emit(payload);
  }

}
