import { useState } from "react";
import TutorCard from "../components/TutorCard";
import BookingModal from "../components/BookingModal";
import { getTutors, saveBooking } from "../data/tutors";

function Home() {

  const [tutors] = useState(getTutors);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [subject, setSubject] = useState("All");
  const [mode, setMode] = useState("All");
  const [selectedTutor, setSelectedTutor] = useState(null);

  const filteredTutors = tutors.filter(tutor => {

    const searchMatch =
      tutor.name.toLowerCase().includes(search.toLowerCase()) ||
      tutor.subjects.join(" ").toLowerCase().includes(search.toLowerCase());

    const cityMatch =
      tutor.city.toLowerCase().includes(city.toLowerCase());

    const subjectMatch =
      subject === "All" || tutor.subjects.includes(subject);

    return searchMatch && cityMatch && subjectMatch;
  });

  function handleBooking(data) {
    saveBooking(data);
    alert("Booking submitted successfully!");
    setSelectedTutor(null);
  }

  return (
    <>
      <section className="hero">
        <h1>Find the Best Home Tutor for Your Child</h1>

        <p>
          Personalized one-to-one tutoring at your doorstep
          or through online classes.
        </p>
      </section>

      <main className="container">

        <div className="search-box">

          <input
            placeholder="Search subject or tutor..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <input
            placeholder="Enter city..."
            value={city}
            onChange={e => setCity(e.target.value)}
          />

          <select value={subject}
            onChange={e => setSubject(e.target.value)}>
            <option value="All">All Subjects</option>
            <option>Mathematics</option>
            <option>Physics</option>
            <option>Coding</option>
            <option>Python</option>
            <option>English</option>
            <option>Commerce</option>
          </select>

          <select value={mode}
            onChange={e => setMode(e.target.value)}>
            <option value="All">All Modes</option>
            <option>Home Tuition</option>
            <option>Online</option>
          </select>

        </div>

        <h2>Verified Tutors</h2>

        <p>{filteredTutors.length} tutors found</p>

        <div className="tutor-grid">

          {filteredTutors.map(tutor => (
            <TutorCard
              key={tutor.id}
              tutor={tutor}
              onBook={setSelectedTutor}
            />
          ))}

        </div>

      </main>

      <BookingModal
        tutor={selectedTutor}
        onClose={() => setSelectedTutor(null)}
        onSubmit={handleBooking}
      />
    </>
  );
}

export default Home;