export default function ExpenseForm() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-2">
        Expense Registration
      </h2>
      <p className="text-center text-gray-500 mb-6">Enter the expenses by Category</p>

      <form className="space-y-4">
      <div>
          <label
            htmlFor="category"
            className="block text-sm font-bold text-gray-700"
          >
            Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Ej. Food, Drinks, etc."
          />
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
              name="amount"
              id="amount"
              className="w-full pl-7 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="0.00"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300 cursor-pointer font-bold"
        >
          Send Registration
        </button>
      </form>
    </div>
  );
}
