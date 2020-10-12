import { Component } from '@angular/core';
import { BudgetItem } from './shared/models/budget-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'budget-calculator';

  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  budget: number = 0;


  getItem(budgetItem) {
    this.budgetItems.push(budgetItem);
    this.budget += parseFloat(budgetItem.amount);
    console.log(this.budgetItems);
    console.log(this.budget);
  }

  deleteFromBudgetItems(item) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    item.amount > 0 ? this.budget -= item.amount : this.budget += parseFloat(item.amount);
  }

}
