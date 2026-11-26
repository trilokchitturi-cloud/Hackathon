import { useState } from "react";
import { getTutors } from "../data/tutors";

function Admin() {

  const [tutors, setTutors] = useState(getTutors);

  const [name, setName] = useState("");
  const [qualification, setQualification] = useState("");
  const [city, setCity] = useState("");
  const [rate, setRate] = useState("");
  const [subject, setSubject] = useState("Mathematics");

  function addTutor(e) {
    e.preventDefault();

    const newTutor = {
      id: Date.now(),
      name,
      image: "https://placehold.co/400x300?text=Tutor",
      qualification,
      experience: "New Tutor",
      rating: "New",
      reviews: 0,
      rate: Number(rate),
      city,
      subjects: [subject]
    };

    const updated = [...tutors, newTutor];

    setTutors(updated);

    localStorage.setItem(
      "htf_tutors",
      JSON.stringify(updated)
    );

    setName("");
    setQualification("");
    setCity("");
    setRate("");

    alert("Tutor added successfully!");
  }

  function deleteTutor(id) {
    const updated = tutors.filter(t => t.id !== id);

    setTutors(updated);

    localStorage.setItem(
      "htf_tutors",
      JSON.stringify(updated)
    );
  }

  return (
    <div className="container page-section">

      <h1>Admin Dashboard</h1>
      <p>Manage TutorFinder profiles.</p>

      <div className="admin-form">

        <h2>Add New Tutor</h2>

        <form onSubmit={addTutor}>

          <input
            placeholder="Tutor Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />

          <input
            placeholder="Qualification"
            value={qualification}
            onChange={e => setQualification(e.target.value)}
            required
          />

          <input
            placeholder="City"
            value={city}
            onChange={e => setCity(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Session Fee"
            value={rate}
            onChange={e => setRate(e.target.value)}
            required
            min="1"
          />

          <select
            value={subject}
            onChange={e => setSubject(e.target.value)}
          >
            <option>Mathematics</option>
            <option>Physics</option>
            <option>Coding</option>
            <option>English</option>
            <option>Commerce</option>
          </select>

          <button className="primary-btn">
            Add Tutor
          </button>

        </form>

      </div>

      <h2>Available Tutors ({tutors.length})</h2>

      <div className="admin-list">

        {tutors.map(tutor => (

          <div className="admin-item" key={tutor.id}>

            <div>
              <h3>{tutor.name}</h3>
              <p>{tutor.subjects.join(", ")} | {tutor.city}</p>
            </div>

            <button
              className="cancel-btn"
              onClick={() => deleteTutor(tutor.id)}
            >
              Remove
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Admin;