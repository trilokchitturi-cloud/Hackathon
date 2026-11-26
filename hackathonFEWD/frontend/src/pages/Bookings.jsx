import { useState } from "react";

function Bookings() {

  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem("htf_bookings") || "[]")
  );

  function cancelBooking(id) {
    const updated = bookings.filter(b => b.id !== id);

    setBookings(updated);

    localStorage.setItem(
      "htf_bookings",
      JSON.stringify(updated)
    );
  }

  return (
    <div className="container page-section">

      <h1>My Bookings</h1>
      <p>View your tutor booking requests.</p>

      {bookings.length === 0 ? (

        <div className="empty-message">
          <h3>No bookings yet</h3>
          <p>Your bookings will appear here.</p>
        </div>

      ) : (

        <div className="booking-list">

          {bookings.map(booking => (

            <div className="booking-card" key={booking.id}>

              <h3>{booking.tutor}</h3>

              <p>Student: {booking.student}</p>
              <p>Subject: {booking.subject}</p>
              <p>Date: {booking.date}</p>
              <p>Time: {booking.time}</p>
              <p>Address: {booking.address}</p>

              <strong>₹{booking.rate}</strong>

              <p>Status: {booking.status}</p>

              <button
                className="cancel-btn"
                onClick={() => cancelBooking(booking.id)}
              >
                Cancel Booking
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Bookings;