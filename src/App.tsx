import AssistanceForm from "./components/AssistanceForm"
import ExpenseForm from "./components/ExpenseForm"

function App() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200">
        <h1 className="text-2xl font-bold text-center mb-8">
          Party Management System
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
