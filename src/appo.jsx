import React, { Component } from 'react';

class BookAppointmentPage extends Component {
  render() {
    return (
      <div className="book-appointment-page">
        <div className="book-appointment-header">
          <h1>Book An Appointment</h1>
          <p>
            Please fill in the following form to book an appointment with your
            counsellor.
          </p>
        </div>

        <div className="book-appointment-body">
          <h2>Couple's Names</h2>
          <input
            type="text"
            name="couple_names"
            placeholder="Enter couple's names"
          />

          <h2>Contact Numbers</h2>
          <input
            type="tel"
            name="contact_numbers"
            placeholder="Enter contact numbers"
          />

          <h2>Choose A Date</h2>
          <input type="date" name="date" placeholder="Enter date" />

          <h2>Choose A Time Slot</h2>
          <select name="time_slot">
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
          </select>

          <button type="submit">Book Appointment</button>
        </div>
      </div>
    );
  }
}

export default BookAppointmentPage;
