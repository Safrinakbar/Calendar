import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import GlobalContext from '../context/GlobalContext';
import staticEvents from '../data/staticEvents';

export function Day({ day, rowIdx, displayedMonth }) {
  const [dayEvents, setDayEvents] = useState([]);
  const { setDaySelected, setShowEventModal, savedEvents, setSelectedEvent } = useContext(GlobalContext);

  useEffect(() => {
    const events = savedEvents.filter(
      evt => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    const staticForDay = staticEvents.filter(evt => {
      if (day.month() !== displayedMonth) return false;
      if (evt.id === 1 && day.date() === 10) return true;
      if (evt.id === 2 && day.date() === 15) return true;
      if (evt.id === 3 && day.date() === 20) return true;
      return false;
    });
    setDayEvents([...staticForDay, ...events]);
  }, [savedEvents, day, displayedMonth]);

  const dayObj = dayjs(day);
  const isToday = dayObj.isSame(dayjs(), 'day');
  const isCurrentMonth = true;
  return (
    <div
      className={`border border-gray-100 w-full h-full flex flex-col items-center justify-center transition rounded-xl bg-blue-50 hover:bg-blue-100 cursor-pointer`}
      onClick={() => {
        setDaySelected(day)
        setShowEventModal(true);
      }}
    >
      <header className="flex flex-col items-center justify-center flex-1 w-full">
        <p
          className={`text-sm font-semibold ${
            isToday
              ? "bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center shadow-md"
              : "text-blue-900"
          }`}
        >
          {dayObj.format("DD")}
        </p>
      </header>
      <div className='flex-1 w-full flex flex-col items-center justify-center'>
        {dayEvents.map((evt, idx) => (
          <div
            key={evt.id || idx}
            onClick={evt.id > 3 ? () => setSelectedEvent(evt) : undefined}
            className={`${evt.label} p-1 mr-3 text-white text-sm rounded mb-1 truncate text-center`}
            title={evt.description}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
}
         

