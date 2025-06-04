import AssistanceForm from "./components/AssistanceForm"
import ExpenseForm from "./components/ExpenseForm"

function App() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="w-full px-4 py-8 bg-white shadow-sm">
        <h1 className="text-4xl font-black text-center">
          Party <span className="text-indigo-700">Management</span> System
        </h1>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Forms Container */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <AssistanceForm />
            </div>
            <div className="flex-1">
              <ExpenseForm />
            </div>
          </div>

          {/* Right Column - Charts Container */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-8">
            <div id="charts-container" className="w-full">
              {/* Charts will be rendered here */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App
