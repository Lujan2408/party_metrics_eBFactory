import AssistanceForm from "./components/AssistanceForm"
import ExpenseForm from "./components/ExpenseForm"
import ChartsContainer from "./components/charts/ChartsContainer"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function App() {
  const [activeView, setActiveView] = useState<'assistance' | 'expenses'>('assistance')
  const [showAttendanceCharts, setShowAttendanceCharts] = useState(false)

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="w-full px-4 py-8 bg-white shadow-sm">
        <h1 className="text-4xl font-black text-center mb-8">
          Party <span className="text-indigo-700">Management</span> System
        </h1>
        
        {/* Navigation Tabs */}
        <div className="flex justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={() => setActiveView('assistance')}
            className={`flex-1 px-6 py-3 text-lg font-semibold rounded-lg transition-colors ${
              activeView === 'assistance'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Assistance
          </button>
          <button
            onClick={() => setActiveView('expenses')}
            className={`flex-1 px-6 py-3 text-lg font-semibold rounded-lg transition-colors ${
              activeView === 'expenses'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Expenses
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Active Form */}
          <div className="min-h-[500px] relative">
            <AnimatePresence mode="wait">
              {activeView === 'assistance' && (
                <motion.div
                  key="assistance"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full"
                >
                  <AssistanceForm onSubmit={() => setShowAttendanceCharts(true)} />
                </motion.div>
              )}
              {activeView === 'expenses' && (
                <motion.div
                  key="expenses"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full"
                >
                  <ExpenseForm />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column - Charts Container */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeView}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <ChartsContainer 
                  activeView={activeView} 
                  showAttendanceCharts={showAttendanceCharts}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
