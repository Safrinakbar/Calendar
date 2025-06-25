import React, { useContext, useState, useEffect } from 'react';
import GlobalContext from '../context/GlobalContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const colorClass = [
  "bg-indigo-500",
  "bg-gray-500",
  "bg-green-500",
  "bg-red-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500"
];

const EventModal = () => {
  const { setShowEventModal, daySelected, dispatchCalEvents, selectedEvent } = useContext(GlobalContext);

  // Use state for form fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedLabel, setSelectedLabel] = useState(colorClass[0]);

  // Reset form fields when daySelected or selectedEvent changes
  useEffect(() => {
    if (selectedEvent) {
      setTitle(selectedEvent.title || '');
      setDescription(selectedEvent.description || '');
      setSelectedLabel(selectedEvent.label || colorClass[0]);
    } else {
      setTitle('');
      setDescription('');
      setSelectedLabel(colorClass[0]);
    }
  }, [daySelected, selectedEvent]);

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvents({ type: "update", payload: calendarEvent });
      toast.info('Event updated successfully!', { position: "top-right", autoClose: 1500 });
    } else {
      dispatchCalEvents({ type: "push", payload: calendarEvent });
      toast.success('Event added successfully!', { position: "top-right", autoClose: 1500 });
    }
    setShowEventModal(false);
  }

  function handleDelete() {
    dispatchCalEvents({ type: "delete", payload: selectedEvent });
    setShowEventModal(false);
    toast.error('Event deleted!', { position: "top-right", autoClose: 1500 });
  }

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center z-50">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">drag_handle</span>
          <div className="flex items-center gap-2">
            {selectedEvent && (
              <button type="button"
                onClick={handleDelete}>
                <span className="material-icons-outlined text-gray-400 cursor-pointer">delete</span>
              </button>
            )}
            <button type="button" onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400 cursor-pointer">close</span>
            </button>
          </div>
        </header>
        <div className="p-4">
          <div className="mb-4">
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="material-icons-outlined text-gray-400">schedule</span>
            <p className="text-gray-600">
              {daySelected ? daySelected.format("dddd, MMMM DD") : ""}
            </p>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="material-icons-outlined text-gray-400">segment</span>
            <input
              type="text"
              name="description"
              placeholder="Add Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-x-2 mb-6">
            <span className="material-icons-outlined text-gray-400">bookmark_border</span>
            {colorClass.map((bgClass, i) => (
              <span
                key={i}
                onClick={() => setSelectedLabel(bgClass)}
                className="relative w-6 h-6 flex items-center justify-center cursor-pointer"
              >
                <span
                  className={`absolute inset-0 rounded-full border-2 border-white shadow ${bgClass}`}
                  style={{ zIndex: 1 }}
                ></span>
                {selectedLabel === bgClass && (
                  <span className="material-icons-outlined text-white text-sm relative z-10">
                    check
                  </span>
                )}
              </span>
            ))}
          </div>

          <footer className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white">
              Save
            </button>
          </footer>
        </div>
      </form>
    </div>
  );
};


export default EventModal;
