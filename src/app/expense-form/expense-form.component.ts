import { NgFor } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportService } from '../report.service';
import { EventEmitter } from '@angular/core';
export interface IExpenseTransaction{
  name: string,
  transaction: {name: string,amount: number};
}
@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css'
})

export class ExpenseFormComponent implements OnInit{
  expenseForm!: FormGroup;
  @Output() expenseResult= new EventEmitter<IExpenseTransaction[]>();

  constructor(private fb:FormBuilder,private expenseSer:ReportService){}

  ngOnInit(): void
  {
    this.initExpenseForm();
  }
  
  initExpenseForm()
  {
     this.expenseForm=this.fb.group({
      transaction: this.fb.array([
        this.fb.group({
          name: [''],
          amount: [''],
        })
      ]),
     });
     console.log(this.expenseForm)
  }
  get transaction()
  {
    return this.expenseForm.controls['transaction'] as FormArray;
  }
  OnSubmit()
  {
    console.log(this.expenseForm.value)
    const {transaction}=this.expenseForm.value;
    const calcRes= this.expenseSer.calExpense(transaction)
    console.log(calcRes)
    const calResArr: IExpenseTransaction[]= Array.from(calcRes,([name,transaction])=>({
      name,
      transaction,
    }));
    console.log(calResArr);
    this.expenseResult.emit(calResArr);
  }
  onAdd()
  {
    const transForm=this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      amount:['',[Validators.required]],
    })
    this.transaction.push(transForm);
  }
  onRemove(index: number)
  {
    this.transaction.removeAt(index);
  }
}
