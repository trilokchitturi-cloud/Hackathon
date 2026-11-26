export const defaultTutors = [
  {
    id: 1,
    name: "Dr. Rajesh Verma",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    qualification: "Ph.D. in Physics",
    experience: "8+ Years",
    rating: 4.9,
    reviews: 42,
    rate: 700,
    city: "Delhi",
    subjects: ["Physics", "Mathematics"]
  },
  {
    id: 2,
    name: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    qualification: "M.Sc. Mathematics",
    experience: "5 Years",
    rating: 4.8,
    reviews: 35,
    rate: 550,
    city: "Hyderabad",
    subjects: ["Mathematics"]
  },
  {
    id: 3,
    name: "Aman Kulkarni",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    qualification: "B.Tech Computer Science",
    experience: "4 Years",
    rating: 5.0,
    reviews: 29,
    rate: 800,
    city: "Pune",
    subjects: ["Coding", "Python"]
  },
  {
    id: 4,
    name: "Meera Iyer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    qualification: "M.A. English",
    experience: "6 Years",
    rating: 4.7,
    reviews: 19,
    rate: 500,
    city: "Mumbai",
    subjects: ["English"]
  },
  {
    id: 5,
    name: "Vikram Malhotra",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    qualification: "Chartered Accountant",
    experience: "7 Years",
    rating: 4.9,
    reviews: 51,
    rate: 650,
    city: "Delhi",
    subjects: ["Commerce"]
  }
];

export function getTutors() {
  const saved = localStorage.getItem("htf_tutors");

  if (saved) {
    return JSON.parse(saved);
  }

  localStorage.setItem("htf_tutors", JSON.stringify(defaultTutors));

  return defaultTutors;
}

export function saveBooking(booking) {
  const bookings = JSON.parse(
    localStorage.getItem("htf_bookings") || "[]"
  );

  bookings.push({
    ...booking,
    id: Date.now(),
    status: "Pending"
  });

  localStorage.setItem("htf_bookings", JSON.stringify(bookings));
}