function TutorCard({ tutor, onBook }) {
  return (
    <div className="tutor-card">

      <img src={tutor.image} alt={tutor.name} />

      <div className="tutor-info">

        <span className="verified">✓ Verified Tutor</span>

        <h3>{tutor.name}</h3>

        <p>{tutor.qualification}</p>

        <p>📍 {tutor.city}</p>

        <p>⭐ {tutor.rating} ({tutor.reviews} reviews)</p>

        <p>Experience: {tutor.experience}</p>

        <div className="subjects">
          {tutor.subjects.map((subject) => (
            <span key={subject}>{subject}</span>
          ))}
        </div>

        <div className="card-bottom">
          <strong>₹{tutor.rate}/session</strong>

          <button onClick={() => onBook(tutor)}>
            Book Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default TutorCard;