"use client";
import React from "react";
import AboutSection from "./About";
import TripsSection from "./BestTrips";
const SectionsContainer = ({ aboutData, tripsData, deals, trips }) => {
  return (
  
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      {/* About Section */}
      <AboutSection data={aboutData} />

      {/* Trips Section */}
      <TripsSection data={tripsData} />
      <TripsSection data={deals} />
      <TripsSection data={trips} />
      
    </div>
  );
};

export default SectionsContainer;
