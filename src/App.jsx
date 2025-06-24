import './index.css'
import "./App.css"
import { getMonth } from './util'
import CalendarHeader from './components/CalendarHeader'
import Sidebar from './components/Sidebar'
import Month from './components/Month'
import React , { useState,useContext,useEffect } from 'react'
import GlobalContext from './context/GlobalContext'
import EventModal from './components/EventModal'

function App() {
  const[currenMonth, setCurrenMonth] = useState(getMonth())
  const { monthIndex, showEventModal} = useContext(GlobalContext)
  useEffect(() => {
    setCurrenMonth(getMonth(monthIndex));
  }, [monthIndex])
  return (
    <React.Fragment>
      {showEventModal && <EventModal/>  }
  
      <div className='min-h-screen min-w-full flex flex-col bg-gradient-to-br from-white via-blue-50 to-blue-100'>
         <CalendarHeader/>
         <div className='flex flex-1 w-full max-w-[1800px] mx-auto gap-6 py-6 px-2'>
          <Sidebar/>
          <Month month={currenMonth}/>
         </div>
      </div>
    </React.Fragment>
  )
}



export default App
