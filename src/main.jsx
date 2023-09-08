import "react-big-calendar/lib/css/react-big-calendar.css";

// import { CalendarApp } from './CalendarApp'
import { CalendarPage } from "./pages/CalendarPage";
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalendarPage />
  </React.StrictMode>,
)
