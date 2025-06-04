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
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
              <div className="h-auto">
                <AssistanceForm />
              </div>
              <div className="h-auto">
                <ExpenseForm />
              </div>
            </div>
          </div>

          {/* Right Column - Charts Container */}
          <div className="w-full lg:w-1/2">
            <div id="charts-container" className="space-y-6">
              {/* Charts will be rendered here */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App
