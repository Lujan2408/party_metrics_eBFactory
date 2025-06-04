import type { StateCreator } from 'zustand';
import type { Expense } from '../types';
import { getRandomId } from '../helpers/getRandomId';

export type ExpenseSliceType = {
  expenses: Expense[];
  totalExpenses: number;
  expensesByCategory: { [key: string]: number };
  addExpense: (category: string, amount: number) => void;
}

export const createExpenseSlice: StateCreator<ExpenseSliceType> = (set) => ({
  expenses: [],
  totalExpenses: 0,
  expensesByCategory: {},

  addExpense: (category: string, amount: number) => {
    const newExpense: Expense = {
      id: getRandomId(),
      category,
      amount,
    };

    set((state) => {
      const newExpenses = [...state.expenses, newExpense];
      const newTotal = state.totalExpenses + amount;
      const newExpensesByCategory = { ...state.expensesByCategory };
      newExpensesByCategory[category] =
        (newExpensesByCategory[category] || 0) + amount;

      return {
        expenses: newExpenses,
        totalExpenses: newTotal,
        expensesByCategory: newExpensesByCategory,
      };
    });
  },
});
