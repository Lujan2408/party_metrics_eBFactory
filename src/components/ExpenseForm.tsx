import { useAppStore } from "../stores/useAppStore"
import { formatCurrency } from "../helpers/formatCurrency"
import { useForm } from "react-hook-form"
import Error from "./Error"

type FormInputs = {
  category: string;
  amount: string;
}

export default function ExpenseForm() {
  
  const { addExpense, totalExpenses, expensesByCategory } = useAppStore()
  // React hook form
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormInputs>()

  // This function is called when the form is submitted. It adds the expense to the store and resets the form.
  const onSubmit = (data: FormInputs) => {
    addExpense(data.category.trim(), parseFloat(data.amount))
    reset()
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-center text-indigo-700 mb-2">
        Expense Registration
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Enter the expenses by Category
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-bold text-gray-700"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Ej. Food, Drinks, etc."
            {...register("category", {
              required: 'The category is required'
            })}
          />
          {/* Here we show the error message if the category is empty */}
          {errors.category && <Error>{errors.category.message}</Error>}
        </div>

        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-bold text-gray-700"
          >
            Amount
          </label>
          <div className="mt-1 relative rounded-lg">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              id="amount"
              className="w-full pl-7 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="00.0"
              {...register("amount", {
                required: 'The amount is required',
                min: { value: 1, message: 'Amount must be greater than 0' },
                validate: (value) => parseFloat(value) > 0 || 'Amount must be greater than 0' // This is a custom validation function that checks if the amount is greater than 0. 
              })}
            />
          </div>
          {errors.amount && <Error>{errors.amount.message}</Error>}
        </div>

        {/* Expenses summary */}
        <div className="mt-6 p-4 bg-gray-50 rounded-xl space-y-3">
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <span className="text-sm font-medium text-gray-600">
              Total Expenses:
            </span>
            <span className="text-lg font-bold text-indigo-600">
              {formatCurrency(totalExpenses)}
            </span>
          </div>

          {/* Here we show the expenses by category */}
          {Object.entries(expensesByCategory).length > 0 ? (
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-700">
                Expenses by Category:
              </h3>
              <div className="space-y-1">
                {/* Here we do map method to iterate over the expenses by category. And the we show the category and the total amount of the expense. on the screen */}
                {Object.entries(expensesByCategory).map(([cat, total]) => (
                  <div
                    key={cat}
                    className="flex justify-between items-center text-sm px-2 py-1 hover:bg-gray-100 rounded"
                  >
                    <span className="text-gray-600 capitalize">{cat}</span>
                    <span className="font-medium text-gray-700">
                      {formatCurrency(total)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-500 text-center py-2">
              No expenses registered yet
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 transition duration-300 cursor-pointer font-semibold"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}
