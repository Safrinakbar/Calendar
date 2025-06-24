import React from 'react'
import plusIcon from '../assets/plus.png'
import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
export default function CreateEventButton ()
{
    const {setShowEventModal} = useContext(GlobalContext);
  return (
    <button onClick={() => setShowEventModal(true)} className='border-2 border-blue-400 bg-blue-50 p-2 rounded-full flex items-center shadow-md hover:shadow-2xl hover:border-blue-600 hover:bg-blue-100 transition-all'>
      <img src={plusIcon} alt='create_event' className='w-7 h-7'/>
      <span className='pl-3 pr-7 font-semibold text-blue-700'>
        Create
      </span>
    </button>
  )
}
