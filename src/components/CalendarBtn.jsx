import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PropTypes } from 'prop-types'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'

export const CalendarBtn = ({showOrHideCalendar}) => {
    return (
        <div className="btnContainer">
            {/* <button className='btnCircle' onClick={openModal}>
                <FontAwesomeIcon icon={faCalendar} />
            </button> */}

            <button className='btnCircle' onClick={showOrHideCalendar}>
                <FontAwesomeIcon icon={faCalendarDay} />
            </button>                
        </div>
    )
}

CalendarBtn.propTypes = {
    openModal: PropTypes.func.isRequired,
    showOrHideCalendar: PropTypes.func.isRequired
}