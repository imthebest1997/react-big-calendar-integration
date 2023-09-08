import { getMessagesEs, localizer } from "./helpers";
import { useCallback, useEffect, useState } from 'react'

import { Calendar, } from 'react-big-calendar'

export const CalendarApp = () => {
    const [events, setEvents] = useState([]);
    const handleSelectEvent = useCallback(
        (event) => globalThis.open(event.link, '_blank'),
        []
    )
    
    const ObtenerDatos = async () => {
        const url = 'http://localhost:5173/src/resources/events.json';
        const resp = await fetch(url);
        const data = await resp.json();
        const eventsWithDate = data.map(event => ({
            ...event,
            start: new Date(event.start),
            end: new Date(event.end)
        }));
        setEvents(eventsWithDate);
    }

    useEffect(() => {
        ObtenerDatos();
    }, [])

    return <>
        <div className="height600">
            <Calendar
                culture="es"
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
                messages={getMessagesEs()}
                onSelectEvent={handleSelectEvent}
                
                popup
            />
        </div>
    </>

}
