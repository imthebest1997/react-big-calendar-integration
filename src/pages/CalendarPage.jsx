import "./CalendarPage.css"

import { CalendarBtn, ExampleGrid } from "../components";

import { CalendarApp } from '../CalendarApp'
import Modal from 'react-modal';
import { useState } from "react";

export const CalendarPage = () => {
    let subtitle;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [calendarIsOpen, setCalendarIsOpen] = useState(false);
    
    function openModal() {
        if(calendarIsOpen){
            setCalendarIsOpen(false);
        }
        setModalIsOpen(true);
    }

    function showOrHideCalendar(){
        setCalendarIsOpen(!calendarIsOpen);
        console.log("El calendario esta " + calendarIsOpen);
    }

    function closeModal() {
        setModalIsOpen(false);
    }
    
    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }
          
    return (
        <>
            <h1>Calendario App</h1>
            <hr/>
            <ExampleGrid/>     

            {
                calendarIsOpen &&                
                <div className="calendarContainer">
                    <CalendarApp/>
                </div>
            }

            <CalendarBtn openModal = {openModal} showOrHideCalendar = {showOrHideCalendar}/>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >   
                <div className="align-end">
                    <button className="btnClose" onClick={closeModal}>X</button>
                </div>

                <CalendarApp/>
            </Modal>
        </>
    )
}
