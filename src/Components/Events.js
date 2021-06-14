import React , {useState} from "react"
import {EventList} from "./../Data/EventList"
import "./../Style/events.css"
import {BiCalendar} from "react-icons/bi"


function Events(){

    return(
        <div id="event">
            <div className="event-nav">
                <h1>May 2020 EVENTS</h1>
                <div>
                    <select name="filter" id="filter">
                        <option value="FILTER BY">FILTER BY </option>
                        <option value="Annual Event">Annual Event</option>
                        <option value="Paid Event">Paid Event</option>
                        <option value="Free Event">Free Event</option>
                        <option value="RSVP Needed">RSVP Needed"</option>
                    </select>
                    <BiCalendar size={50} style={{color: "white", backgroundColor: "#43b32b"}}/>
                </div>
            </div>
            <section>
            {EventList.map((events, id) => (
                <div className= "card">
                    <div className="dates">
                        <h3>{events.eventInfo.date}</h3>
                        <div className="date">
                            <p>{events.eventInfo.time}</p>
                        </div>
                    </div>
                    <div className="card-info">
                        <h4>{events.eventInfo.day}</h4>
                        <h5>{events.eventInfo.eventTitle}</h5>
                        <p>{events.eventInfo.location}</p>
                        <p>{events.eventInfo.paragraph}</p>
                    </div>
            
                </div>
            
                ))}
                </section>
        </div>
    )
}

export default Events;