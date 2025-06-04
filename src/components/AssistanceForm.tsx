export default function AssistanceForm() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
        Attendee Registration
      </h2>

      <form className="space-y-4">
        <div>
          <label
            htmlFor="men"
            className="block text-sm font-bold text-gray-700 "
          >
            Men
          </label>
          <input
            type="number"
            name="men"
            id="men"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Number of men"
          />
        </div>

        <div>
          <label
            htmlFor="women"
            className="block text-sm font-bold text-gray-700"
          >
            Women
          </label>
          <input
            type="number"
            name="women"
            id="women"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Number of women"
          />
        </div>

        <div>
          <label
            htmlFor="children"
            className="block text-sm font-bold text-gray-700"
          >
            Children
          </label>
          <input
            type="number"
            name="children"
            id="children"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Number of children"
          />
        </div>

        <div className="pt-4 border-t border-gray-200">
          <label className="block text-sm font-bold text-gray-800 mb-1">
            Total of people
          </label>
          <div className="text-lg font-bold text-indigo-600">
           0
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
