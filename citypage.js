
// CityPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { hostelData } from './data'; // Import the hostel data

const CityPage = () => {
  const { cityName } = useParams();
  const hostels = hostelData[cityName] || []; // Get hostels for the selected city

  return (
    <div className="city-page">
      <h1>Welcome to {cityName}</h1>
      <p>Here you can find information about {cityName}.</p>
      <h2>Available Hostels:</h2>
      {hostels.length > 0 ? (
        <div className="hostel-list">
          {hostels.map((hostel, index) => (
            <div className="hostel-card" key={index}>
              <img src={hostel.image} alt={hostel.name} className="hostel-image" />
              <div className="hostel-info">
                <strong>{hostel.name}</strong>
                <p>{hostel.address}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No hostels available in this city.</p>
      )}
    </div>
  );
};

export default CityPage;
