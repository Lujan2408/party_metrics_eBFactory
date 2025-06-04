import { useEffect, useState } from "react";

export default function AssistanceForm() {

  const [men, setMen] = useState(0)
  const [women, setWomen] = useState(0)
  const [children, setChildren] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(men + women + children)
  }, [men, women, children])

  const handleSubmit = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-2">
        Attendee Registration
      </h2>
      <p className="text-center text-gray-500 mb-6">Enter the number of attendees by category</p>

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
            onChange={(e) => setMen(Number(e.target.value))}
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
            onChange={(e) => setWomen(Number(e.target.value))}
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
            onChange={(e) => setChildren(Number(e.target.value))}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Number of children"
          />
        </div>

        <div className="pt-4 border-t border-gray-200">
          <label className="block text-sm font-bold text-gray-800 mb-1">
            Total of people
          </label>
          <div className="text-lg font-bold text-indigo-600">
           {total === 0 ? (
            <p className="text-gray-500 font-normal">Start adding attendees and see the total here.</p>
           ) : (
            total
           )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300 cursor-pointer font-bold"
          onClick={handleSubmit}
        >
          Add Registration
        </button>
      </form>
    </div>
  );
}
