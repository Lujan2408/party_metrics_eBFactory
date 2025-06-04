import { z } from "zod"
import type { expenseSchema } from "../schemas/expenseSchema"

export type Expense = z.infer<typeof expenseSchema>
