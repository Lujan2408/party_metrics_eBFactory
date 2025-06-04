import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { createExpenseSlice, type ExpenseSliceType } from "./getExpenseSlice"
import { createAttendanceSlice, type AttendanceSliceType } from "./getAttendanceSlice"

type StoreState = ExpenseSliceType & AttendanceSliceType

export const useAppStore = create<StoreState>()(
  devtools((...a) => ({
    ...createExpenseSlice(...a),
    ...createAttendanceSlice(...a),
  }))
)