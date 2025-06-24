import React, { useContext } from 'react'
import CreateEventButton from './CreateEventButton'
import SmallCalendar from './SmallCalendar'
import GlobalContext from '../context/GlobalContext'
import staticEvents from '../data/staticEvents'

const Sidebar = () => {
  const { savedEvents, setShowEventModal, setSelectedEvent } = useContext(GlobalContext);

  return (
    <aside className='border-2 border-gray-200 rounded-2xl p-6 w-72 bg-white shadow-lg'>
      <CreateEventButton/>
      <SmallCalendar/>
      <div className="mt-8">
        <p className="text-gray-500 font-bold mb-2">Events</p>
        <div className="flex flex-col gap-2">
          {[...(staticEvents || []), ...(savedEvents || [])].length > 0 ? (
            [...(staticEvents || []), ...(savedEvents || [])].map(evt => (
              <div
                key={evt.id}
                className={`cursor-pointer px-3 py-2 rounded ${evt.label} text-white shadow hover:shadow-lg transition`}
                onClick={savedEvents.includes(evt) ? () => {
                  setSelectedEvent(evt);
                  setShowEventModal(true);
                } : undefined}
                title={evt.description}
              >
                <div className="font-semibold truncate">{evt.title}</div>
                <div className="text-xs opacity-80 truncate">{evt.description}</div>
              </div>
            ))
          ) : (
            <div className="text-gray-400 text-sm">No events</div>
          )}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar