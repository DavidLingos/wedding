import React, { Component } from 'react';
import CountDown from 'reactjs-countdown';
import Countdown from 'react-countdown';
import Sectiontitle from '../section-title'
import './style.css'
 
const countDownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    const twoDigits = (value) => {
        if ( value.toString().length <= 1 ) {
            return '0'+value.toString()
        }
        return value.toString()
    }

    const setDayString = () => {
        return days > 4 || days == 0 ? 'dní' : days > 1 ? 'dny' : 'day';
    }

    const setHourString = () => {
        return hours > 4 || hours == 0 ? 'hodin' : hours > 1 ? 'hodiny' : 'hodina';
    }

    const setMinutesString = () => {
        return minutes > 4 || minutes == 0 ? 'minut' : minutes > 1 ? 'minuty' : 'minuta';
    }

    const setSecondsString = () => {
        return seconds > 4 || seconds == 0 ? 'sekund' : seconds > 1 ? 'sekundy' : 'sekunda';
    }

    // update show days
    const showDays = () => {
        if (days > 0) {
            return (
                <li>
                    <p className="digit">{ twoDigits(days) }</p>
                    <p className="text">{ setDayString() }</p>
                </li>
            );
        }
    }

    return(
        <div>
            <ul className="react-countdown">
                { showDays() }
                <li>
                    <p className="digit">{ twoDigits(hours) }</p>
                    <p className="text">{ setHourString() }</p>
                </li>
                <li>
                    <p className="digit">{ twoDigits(minutes) }</p>
                    <p className="text">{ setMinutesString() }</p>
                </li>
                <li>
                    <p className="digit">{ twoDigits(seconds) }</p>
                    <p className="text">{ setSecondsString() }</p>
                </li>
            </ul>
        </div>
    );
}

class Saveday extends Component {

    render() {
        return(
            <div className="count-down-area section-padding">
                <Sectiontitle section={'Do svatby zbývá'}/>
                <div className="count-down-sectionparallax">
                    <div className="container">
                        <div className="count-down-item count-down-item2">
                            <div className="row">
                                <div className="col-12 clock-area">
                                    <div className="count-down-clock">
                                        <Countdown
                                            date="September 2, 2023"
                                            renderer={countDownRenderer}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Saveday;