import React, { use, useContext } from 'react';
import logo from "../assets/logo.png";
import GlobalContext from '../context/GlobalContext';
import dayjs from 'dayjs';

const CalendarHeader = () => {
  const {monthIndex,setMonthIndex} = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(dayjs().month());
  }

  return (
    <header className='px-8 py-4 flex items-center w-full bg-white shadow rounded-b-xl'>
      <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
      <h1 className='mr-10 text-2xl text-blue-700 font-bold'>Calendar</h1>

      <button onClick={handleReset} className='border-2 border-blue-400 bg-blue-50 rounded px-5 py-2 mr-5 font-semibold text-blue-700 hover:bg-blue-100 hover:border-blue-600 transition'>
        Today
      </button>

      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointed text-gray-600 mx-2">chevron_left</span>
      </button>

      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointed text-gray-600 mx-2">chevron_right</span>
      </button>
      <h2 className='ml-4 text-xl text-gray-500 font-bold'>
        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
      </h2>
    </header>
  );
};

export default CalendarHeader;
