import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  standalone: false,
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class Reports implements OnInit {
  transactions: any[] = [];
  totalSales: number = 0;

  ngOnInit(): void {
    try {
      const stored = localStorage.getItem('transactions');
      this.transactions = stored ? JSON.parse(stored) : [];

      this.totalSales = this.transactions.reduce((sum: number, tx: any) => {
        const validAmount = Number(tx.total);
        return sum + (isNaN(validAmount) ? 0 : validAmount);
      }, 0);
    } catch (e) {
      console.error("Error loading transactions:", e);
      this.transactions = [];
      this.totalSales = 0;
    }
  }
}
