import AssistanceForm from "./components/AssistanceForm"
import ExpenseForm from "./components/ExpenseForm"

function App() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
        <h1 className="text-4xl font-black text-center">
          Party <span className="text-indigo-700">Management</span> System
        </h1>
        <div className="flex flex-row gap-8">
          <AssistanceForm />
          <ExpenseForm />
        </div>
      </div>
    </main>
  );
}

export default App
