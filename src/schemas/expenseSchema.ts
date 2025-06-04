import { z } from "zod"

export const expenseSchema = z.object({
  id: z.string(),
  category: z.string(),
  amount: z.number(),
})