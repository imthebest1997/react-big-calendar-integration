import "react-big-calendar/lib/css/react-big-calendar.css";

import { BrowserRouter } from "react-router-dom";
import { CalendarApp } from './CalendarApp'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CalendarApp />
    </BrowserRouter>
  </React.StrictMode>,
)
