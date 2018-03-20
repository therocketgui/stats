import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import events from '../data/event_data';

class EventList extends Component {
  render(){
      return(
      <div className="events-wrapper">
        {events.map((event) =>

            <div className="event-wrapper" key={event.id}>
              <div className="event">
                <div className="event-top">
                  <div>
                    <p>{event.content}</p>
                  </div>
                </div>
                <div className="event-bot">
                  <div>
                    <h3>{event.title}</h3>
                  </div>
                  <div>
                    <p>{event.date}</p>
                  </div>
                </div>
              </div>
            </div>

        )}
      </div>
    );
  }
}

export default EventList;
