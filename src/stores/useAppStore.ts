import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { createExpenseSlice, type ExpenseSliceType } from "./getExpenseSlice"

export const useAppStore = create<ExpenseSliceType>()(
  devtools((...a) => ({
    ...createExpenseSlice(...a),
  }))
)