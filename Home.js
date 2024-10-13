//Home.js
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import searchIcon from './city-icon.png'; 
import cityImage from './search-icon.jpg'; 

const Home = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const dropdownRef = useRef(null); 
  const featuresRef = useRef(null); 
  const contactRef = useRef(null); // Add reference for Contact Section
  const navigate = useNavigate();

  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Guntur', 'Vijayawada',
  ];

  const handleChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    if (city) {
      navigate(`/city/${city}`);
    }
  };

  const handleExploreClick = () => {
    dropdownRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleJoinClick = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // HostelCard component to display individual hostels
  const HostelCard = ({ hostel }) => (
    <div className="hostel-card">
      <img src={hostel.image} alt={hostel.name} className="hostel-image" />
      <h3 className="hostel-name">
        <a href={hostel.link} target="_blank" rel="noopener noreferrer">
          {hostel.name}
        </a>
      </h3>
      <p className="hostel-address">{hostel.address}</p>
    </div>
  );

  // HostelHub to display a list of hostels
  const HostelHub = () => {
    const hostels = [
      {
        name: "Zostel Mumbai",
        address: "Khar West, Mumbai, Maharashtra 400052",
        image: "https://i.ibb.co/K9h9xdW/Whats-App-Image-2024-09-30-at-11-04-33-PM.jpg",
      },
      {
        name: "Moustache Hostel Udaipur",
        address: "44, Gadiya Devra, Near Jagdish Temple, Udaipur, Rajasthan 313001",
        image: "https://i.ibb.co/z4xgfZM/Whats-App-Image-2024-10-01-at-1-13-49-PM.jpg",
      },
      {
        name: "GoStops Agra",
        address: "Opposite Saga Emporium, Taj East Gate Road, Agra, Uttar Pradesh 282001",
        image: "https://i.ibb.co/YTb5y9C/Whats-App-Image-2024-10-01-at-1-17-04-PM.jpg",
      },
      {
        name: "Zostel Manali",
        address: "Manu Temple Road, Old Manali, Himachal Pradesh 175131",
        image: "https://i.ibb.co/SX2hsys/Whats-App-Image-2024-09-30-at-11-31-48-PM.jpg",
      },
      {
        name: "Jungle Hostel Goa",
        address: "H.No 486, Vagator Beach Road, Vagator, Goa 403509",
        image: "https://i.ibb.co/GFM7jjt/Whats-App-Image-2024-10-01-at-1-19-22-PM.jpg",
      },
      {
        name: "Bunk Stay Rishikesh",
        address: "Laxman Jhula Road, Rishikesh, Uttarakhand 249302",
        image: "https://i.ibb.co/ws69swP/Whats-App-Image-2024-10-01-at-1-24-02-PM.jpg",
      },
      {
        name: "Moustache Hostel Jaisalmer",
        address: "Near Fort Gate, Dhibba Para, Jaisalmer, Rajasthan 345001",
        image: "https://i.ibb.co/fM7rFh3/Whats-App-Image-2024-10-01-at-1-27-02-PM.jpg",
      },
      {
        name: "The Lost Hostel Varkala",
        address: "2nd, North Cliff, Kurakkanni Temple Rd, Varkala, Kerala 695141",
        image: "https://i.ibb.co/6XLSrnt/Whats-App-Image-2024-10-01-at-1-30-34-PM.jpg",
      },
      // Add more hostels here as needed
    ];

    return (
      <div className="hostel-hub-container">
        <h1>Famous Hostels</h1>
        <p>Here you can find information about hostels around India.</p>
        <div className="hostel-grid">
          {hostels.map((hostel, index) => (
            <HostelCard key={index} hostel={hostel} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="home-container">
      <nav className="navbar-container">
        <div className="horizontal-navbar">
          <ul className="unorder">
            <li><b>Home</b></li>
            <li onClick={handleExploreClick}><b>Explore</b></li>
            <li onClick={handleJoinClick}><b>Join Us</b></li>
            <li><b>Booking</b></li>
            <li onClick={handleContactClick}><b>Contact</b></li> {/* Link to Contact */}
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <h1 style={{ color: 'black' }}>Hostelhub</h1>
          <p style={{ color: 'black' }}>Your journey starts here. Join us and explore amazing experiences!</p>
          <button className="hero-button">Get Started</button>
        </div>
      </section>

      <div className="city-dropdown" ref={dropdownRef}>
        <h1>Select a City</h1>
        <div className="dropdown-search">
          <img src={cityImage} alt="City" className="city-image" />
          <select value={selectedCity} onChange={handleChange}>
            <option value="" disabled>Select City</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
          <img src={searchIcon} alt="Search" className="city-image" />
        </div>
      </div>

      <div className="features-section" ref={featuresRef}>
        <h2 className="features-title">Why Choose Us?</h2>
        <div className="features-container">
          <div className="feature-card">
            <h3>Affordable Prices</h3>
            <p>We provide affordable prices for quality hostels.</p>
          </div>
          <div className="feature-card">
            <h3>Safe & Secure</h3>
            <p>Your safety is our priority with top-notch security.</p>
          </div>
          <div className="feature-card">
            <h3>Great Locations</h3>
            <p>Our hostels are strategically located in prime areas.</p>
          </div>
          <div className="feature-card">
            <h3>Community Vibe</h3>
            <p>Join a community of travelers and make lifelong friends.</p>
          </div>
        </div>
      </div>

      <HostelHub />

      {/* Contact Us Section */}
      <div className="contact-section" ref={contactRef}>
        <h2>Contact Us</h2>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>

      <footer>
        <p>© 2024 Hostelhub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
