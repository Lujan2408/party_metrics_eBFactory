import AttendanceCharts from './AttendanceCharts'
import ExpenseCharts from './ExpenseCharts'
import { memo } from 'react'

interface ChartsContainerProps {
  activeView: 'assistance' | 'expenses'
  showAttendanceCharts: boolean
}

const ChartsContainer = memo(function ChartsContainer({ 
  activeView, 
  showAttendanceCharts 
}: ChartsContainerProps) {
  return (
    <div className="space-y-6">
      {/* Only show attendance charts if activeView is assistance AND showAttendanceCharts is true */}
      <div className={activeView === 'assistance' ? 'block' : 'hidden'}>
        {showAttendanceCharts ? (
          <AttendanceCharts />
        ) : (
          <div className="text-center text-gray-500 p-6 bg-white rounded-2xl shadow-xl border border-gray-200">
            <p>Submit the attendance form to see the charts</p>
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