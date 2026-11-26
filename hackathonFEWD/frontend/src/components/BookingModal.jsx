function BookingModal({ tutor, onClose, onSubmit }) {
  if (!tutor) return null;

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      student: e.target.student.value,
      subject: e.target.subject.value,
      date: e.target.date.value,
      time: e.target.time.value,
      address: e.target.address.value,
      tutor: tutor.name,
      rate: tutor.rate
    };

    onSubmit(data);
  }

  return (
    <div className="modal-overlay">
      <div className="modal">

        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>Book a Tutor</h2>
        <p>Booking with: {tutor.name}</p>

        <form onSubmit={handleSubmit}>

          <label>Student Name</label>
          <input name="student" required placeholder="Full name" />

          <label>Subject</label>
          <select name="subject">
            {tutor.subjects.map(s => (
              <option key={s}>{s}</option>
            ))}
          </select>

          <label>Preferred Date</label>
          <input type="date" name="date" required />

          <label>Time Slot</label>
          <select name="time">
            <option>04:00 PM - 05:00 PM</option>
            <option>05:30 PM - 06:30 PM</option>
            <option>07:00 PM - 08:00 PM</option>
          </select>

          <label>Address / Location</label>
          <input name="address" required placeholder="Enter your address" />

          <h3>Session Fee: ₹{tutor.rate}</h3>

          <button type="submit" className="primary-btn">
            Confirm Booking
          </button>

        </form>
      </div>
    </div>
  );
}

export default BookingModal;