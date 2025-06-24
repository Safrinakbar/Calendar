import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react'
import { getMonth } from '../Util';
import GlobalContext from '../context/GlobalContext';

const SmallCalendar = () => {

    const [currenMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());

    const [currenMonth, setCurrentMonth] = useState(getMonth());

    useEffect(() => {
        setCurrentMonth(getMonth(currenMonthIdx));
    }, [currenMonthIdx]);
    
    const {monthIndex ,setSmallCalendarMonth, setDaySelected, daySelected, setShowEventModal} = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonthIdx(monthIndex);
    }, [monthIndex]);

    function handlePrevMonth()
    {
        setCurrentMonthIdx(currenMonthIdx - 1);
    }

    function handleNextMonth()
    {
        setCurrentMonthIdx(currenMonthIdx + 1);
    }   

    function getDayClass(day) {
        const format = "DD-MM-YY";
        const today = dayjs().format(format);  
        const curDay= day.format(format);
        const selcDay= daySelected && daySelected.format(format);
        if (today === curDay) {
            return 'bg-blue-500 rounded-full text-white';
        }else if( selcDay === curDay) {
            return 'bg-blue-100 rounded-full text-blue-600 font-bold';
        }
        else{
            return " ";
        }   
    }


  return (
    <div className='mt-9'>
        <header className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <button onClick={handlePrevMonth} className='flex items-center'>
                  <span className='material-icons-outlined cursor-pointer text-gray-600'>
                      chevron_left
                  </span>
                </button>
                <p className='text-gray-500 font-bold'>
                    {dayjs(new Date(dayjs().year(), currenMonthIdx)).format('MMMM YYYY')}
                </p>
                <button onClick={handleNextMonth} className='flex items-center'>
                  <span className='material-icons-outlined cursor-pointer text-gray-600'>
                      chevron_right
                  </span>
                </button>
            </div>
        </header>
        <div className='grid grid-cols-7 grid-rows-6'>
            {currenMonth[0].map((day,i)=>(
                <span key={i} className='text-sm py-1 text-center'>
                    {day.format('dd').charAt(0)}
                </span>
            ))}
            {currenMonth.map((row,i) => (
                <React.Fragment key={i}>
                    {row.map((day, idx) => (
                        <button key={idx} 
                        className={`py-1 w-full ${getDayClass(day)} hover:bg-blue-100 transition duration-200 rounded-full`}
                        onClick={() =>{
                            setSmallCalendarMonth(currenMonthIdx);
                            setDaySelected(day);
                            setShowEventModal(true); 
                        }}>
                            <span className='text-sm'>
                                {day.format('D')}
                            </span>
                        </button>
                    ))}
                </React.Fragment>
            ))}
    </div>
    </div>
  )
}

export default SmallCalendar