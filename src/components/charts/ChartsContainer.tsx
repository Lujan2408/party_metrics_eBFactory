import AttendanceCharts from './AttendanceCharts'
import ExpenseCharts from './ExpenseCharts'
import { memo } from 'react'

interface ChartsContainerProps {
  activeView: 'assistance' | 'expenses'
}

const ChartsContainer = memo(function ChartsContainer({ activeView }: ChartsContainerProps) {
  return (
    <div className="space-y-6">
      {/* We keep both charts mounted but hide/show them based on activeView */}
      <div className={activeView === 'assistance' ? 'block' : 'hidden'}>
        <AttendanceCharts />
      </div>
      <div className={activeView === 'expenses' ? 'block' : 'hidden'}>
        <ExpenseCharts />
      </div>
    </div>
  )
})

export default ChartsContainer 