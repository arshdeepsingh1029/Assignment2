import React from "react";
import "./Styles/Services.css";

const servicesData = [
  {
    id: 1,
    title: "Service 1",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    title: "Service 2",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    title: "Service 3",
    imageUrl: "https://via.placeholder.com/200",
  },
];

function Services() {
  return (
    <div className="services-container">
      <h1 className="services-heading">Welcome to the Services Page</h1>
      <div className="services-cards">
        {servicesData.map((service) => (
          <div key={service.id} className="services-card">
            <img src={service.imageUrl} alt={service.title} />
            <h4>{service.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
