import React from 'react'
import { Day } from './Day'

const Month = ({ month, monthIndex }) => {
  return (
    <div className='flex-1 flex flex-col'>
      <div className="grid grid-cols-7 mb-2">
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((wd, i) => (
          <div key={i} className="text-xs font-medium text-blue-700 text-center py-1">
            {wd}
          </div>
        ))}
      </div>
      <div className='flex-1 grid grid-cols-7 grid-rows-5 gap-2 bg-white rounded-2xl shadow-lg p-4'>
        {month.slice(0, 5).map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <Day day={day} key={idx} rowIdx={i} displayedMonth={monthIndex} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Month