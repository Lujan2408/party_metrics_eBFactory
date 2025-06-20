import { useAppStore } from "../stores/useAppStore";

type AssistanceFormProps = {
  onSubmit: () => void;
}

export default function AssistanceForm({ onSubmit }: AssistanceFormProps) {
  
  const { men, women, children, total, setMen, setWomen, setChildren } = useAppStore();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (total > 0) {
      onSubmit(); // This onSubmit allows us to show conditionaly the charts in the App.tsx component.
    }
  }

  // This function helps us to calculate the percentage of people in each category.
  const calculatePercentageOfPeople = (value: number, total: number) => {
    // Note: We are updating the total of people state in the store, when the user changes the number of people in each category. We are doing the update automatically when set each category (in getAttendanceSlice.ts)
    return ((value / total) * 100).toFixed(2) + '%'
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-2">
        Attendee Registration
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Enter the number of attendees by category
      </p>

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
            value={men > 0 ? men : ""}
            placeholder="Number of men"
            onChange={(e) => setMen(Number(e.target.value))} // Here we are updating the men state and the total of people as well
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {/* Here we show conditionaly (if the value is greater than 0) the percentage of men and the same for the rest of the categories */}
          {men > 0 ? (
            <p className="text-sm font-normal text-gray-500 pt-2">
              Percentage of Men:{" "}
              <span className="font-bold text-indigo-600">
                {calculatePercentageOfPeople(men, total)}
              </span>
            </p>
          ) : (
            ""
          )}
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
            value={women > 0 ? women : ""}
            placeholder="Number of women"
            onChange={(e) => setWomen(Number(e.target.value))}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {women > 0 ? (
            <p className="text-sm font-normal text-gray-500 pt-2">
              Percentage of Women:{" "}
              <span className="font-bold text-indigo-600">
                {calculatePercentageOfPeople(women, total)}
              </span>
            </p>
          ) : (
            ""
          )}
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
            value={children > 0 ? children : ""}
            placeholder="Number of children"
            onChange={(e) => setChildren(Number(e.target.value))}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {children > 0 ? (
            <p className="text-sm font-normal text-gray-500 pt-2">
              Percentage of Children:{" "}
              <span className="font-bold text-indigo-600">
                {calculatePercentageOfPeople(children, total)}
              </span>
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="pt-4 border-t border-gray-200">
          <label className="block text-sm font-bold text-gray-800 mb-1">
            Total of people
          </label>
          <div className="text-lg font-bold text-indigo-600">
            {total === 0 ? (
              <p className="text-sm font-normal text-gray-500 text-center py-2">
                Start adding attendees and see the total here.
              </p>
            ) : (
              total
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300 cursor-pointer font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSubmit}
          disabled={total === 0}
        >
          Add Registration
        </button>
      </form>
    </div>
  );
}
