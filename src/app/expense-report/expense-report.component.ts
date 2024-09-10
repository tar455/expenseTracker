import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-report',
  standalone: true,
  imports: [NgFor],
  templateUrl: './expense-report.component.html',
  styleUrl: './expense-report.component.css'
})
export class ExpenseReportComponent implements OnInit{
  @Input() calReportRes: any = [];
  constructor(){}

  ngOnInit() : void
  {

  }
}
