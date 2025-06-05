import AttendanceCharts from './AttendanceCharts'
import ExpenseCharts from './ExpenseCharts'
import { memo } from 'react'

type ChartsContainerProps = {
  activeView: 'assistance' | 'expenses'
  showAttendanceCharts: boolean
}

// This component is used to display the charts for the attendance and expenses.
// "memo" is used to prevent unnecessary re-renders of the component. It only re-render the component when the props change.
const ChartsContainer = memo(function ChartsContainer({ activeView, showAttendanceCharts }: ChartsContainerProps) {
  return (
    <div className="space-y-6">
      {/* We keep both charts mounted but hide/show them based on activeView */}
      <div className={activeView === 'assistance' ? 'block' : 'hidden'}>
        {showAttendanceCharts ? (
          <AttendanceCharts />
        ) : (
          <div className="text-center text-gray-500 p-6 bg-white rounded-2xl shadow-xl border border-gray-200">
            <p>Start adding attendees to see the charts here.</p>
          </div>
        )}
      </div>
      <div className={activeView === 'expenses' ? 'block' : 'hidden'}>
        <ExpenseCharts />
      </div>
    </div>
  )
})

export default ChartsContainer