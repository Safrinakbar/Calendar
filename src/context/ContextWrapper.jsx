import React,{useEffect, useReducer, useState} from 'react'
import GlobalContext from './GlobalContext' 
import dayjs from 'dayjs';

function savedEventsReduce(state, {type, payload}) 
{
    switch(type)
    {
        case 'push':
            return [...state, payload];
        case 'update':
            return state.map(evt => evt.id === payload.id ? payload : evt);
        case 'delete':
            return state.filter(evt => evt.id !== payload.id);
        default:
            throw new Error();
    }
}

function initEvents(){
    const storageEvents = localStorage.getItem('savedEvents');
    const pardEvents = storageEvents ? JSON.parse(storageEvents) : [];
    return pardEvents;
}

const ContextWrapper = (props) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs());
    const [showEventModal, setShowEventModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [savedEvents, dispatchCalEvents] = useReducer(savedEventsReduce, undefined, initEvents )
    const [labels, setlabels]   = useState([])
     
    useEffect(()=>{
        localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
    }, [savedEvents]);

    useEffect(()=>{
        setlabels((prevLabels) => {
            return [...new Set(savedEvents.map(evt => evt.label))].map(label =>{
                const currentLabel = prevLabels.find(l => l.label === label);
                return{
                    label,
                    checked: currentLabel ? currentLabel.checked : true,
                }
            });
        })
    }, [savedEvents]);

    useEffect(() => {   
        if(smallCalendarMonth !== null)
        {
            setSmallCalendarMonth(smallCalendarMonth);
        }
    }, [smallCalendarMonth]);
  return (
    <div>
        <GlobalContext.Provider value={{
            monthIndex, 
            setMonthIndex, 
            smallCalendarMonth, 
            setSmallCalendarMonth,
            daySelected, 
            setDaySelected,
            showEventModal, 
            setShowEventModal,
            dispatchCalEvents,
            selectedEvent,
            setSelectedEvent,
            savedEvents,
            setlabels,
            labels
            }}>
            {props.children}
        </GlobalContext.Provider>
    </div>
  )
}

export default ContextWrapper