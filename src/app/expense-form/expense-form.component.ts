import { Component } from '@angular/core';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css'
})
export class ExpenseFormComponent {
  constructor(){}
  public firstName: string ="hello";
  public lastName: string="hety";
}
