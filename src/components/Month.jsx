import React from 'react'
import { Day } from './Day'
import dayjs from 'dayjs'

const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const Month = ({month}) => {
  return (
    <div className='flex-1 flex flex-col'>
      <div className="grid grid-cols-7 mb-2">
        {weekDays.map((wd, i) => (
          <div key={i} className="text-xs font-medium text-blue-700 text-center py-1">
            {wd}
          </div>
        ))}
      </div>
      <div className='flex-1 grid grid-cols-7 grid-rows-5 gap-2 bg-white rounded-2xl shadow-lg p-4'>
        {month.map((row,i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <Day day={day} key={idx} rowIdx={i}/>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Month