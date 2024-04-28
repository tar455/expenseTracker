import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { OverviewComponent } from '../overview/overview.component';
import { ExpensestatComponent } from '../expensestat/expensestat.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent,OverviewComponent,ExpensestatComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
