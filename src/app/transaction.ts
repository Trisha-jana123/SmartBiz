import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Transaction {

  // ✅ Save to localStorage
  recordTransaction(transaction: any) {
    const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    alert("transaction "+ localStorage)
  }

  // ✅ Read from localStorage
  getTransactions() {
    const stored = localStorage.getItem('transactions');
    return stored ? JSON.parse(stored) : [];
  }
}
