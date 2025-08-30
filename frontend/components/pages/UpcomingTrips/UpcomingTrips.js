"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/UpcomingTrips/UpcomingTrips.module.css";
import { motion } from "framer-motion";
import {
  FaTimes,
  FaMoon,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaChevronRight,
} from "react-icons/fa"; // Added FaChevronRight for arrow

const UpcomingTrips = () => {
  const mockTrips = [
    {
      id: 1,
      title: "Spiti Full Circuit Roadtrip",
      image: "/images/spain.jpg",
      duration: "N/7D",
      location: "Delhi - Delhi",
      dates: "9 Aug, 5 Sep + 4 batches",
      price: "22,999/-",
      currentPrice: "19,999/-",
    },
    {
      id: 2,
      title: "8-Day Leh Ladakh Tour Package with Turtuk",
      image: "/images/leh.jpg",
      duration: "7N/8D",
      location: "Leh - Leh",
      dates: "30 Aug, 6 Sep + 4 batches",
      price: "28,999/-",
      currentPrice: "19,999/-",
    },
    {
      id: 3,
      title: "Ladakh Bike Trip from Srinagar to Leh",
      image: "/images/leh.jpg",
      duration: "0N/11D",
      location: "Srinagar - Delhi",
      dates: "0 Aug",
      price: "42,999/-",
      currentPrice: "29,999/-",
    },
    {
      id: 4,
      title: "15 Days Summer Special European Grandeur",
      image: "/images/europe.jpg",
      duration: "14N/15D",
      location: "London Airport - Rome Airport",
      dates: "30 Aug, 9 Sep + 4 batches",
      price: "2,90,900/-",
      currentPrice: "19,999/-",
    },
    {
      id: 5,
      title: "13 Days Imperial Europe Trip with London",
      image: "/images/europe.jpg",
      duration: "12N/13D",
      location: "London Airport - Rome Airport",
      dates: "30 Aug, 3 Sep + 4 batches",
      price: "2,92,900/-",
      currentPrice: "29,999/-",
    },
  ];

  const mockDestinations = {
    india: [
      "Ladakh",
      "Spiti",
      "Meghalaya",
      "Kashmir",
      "Kerala",
      "Andaman",
      "Rajasthan",
      "Himachal",
      "Sikkim",
      "Uttarakhand",
    ],
    international: ["Europe", "America", "Asia", "Australia"],
  };

  const mockMonths = [
    "Aug-25",
    "Sep-25",
    "Oct-25",
    "Nov-25",
    "Dec-25",
    "Jan-26",
    "Feb-26",
    "Mar-26",
    "Apr-26",
    "May-26",
    "Jun-26",
  ];

  const [trips, setTrips] = useState(mockTrips);
  const [destinations] = useState(mockDestinations);
  const [months] = useState(mockMonths);
  const [filters, setFilters] = useState({
    destination: "India",
    subDestinations: [],
    duration: [2, 14],
    budget: [9000, 300000],
    months: [],
  });
  const [showSubDestinations, setShowSubDestinations] = useState(false); // Default closed
  const [sliderChanged, setSliderChanged] = useState({
    duration: false,
    budget: false,
  });
  const [activeMobileTab, setActiveMobileTab] = useState(null);
  useEffect(() => {
    applyFilters();
  }, [filters]);

  const handleDestinationClick = (dest) => {
    setFilters({ ...filters, destination: dest, subDestinations: [] });
    setShowSubDestinations(true); // Open sub-destinations on click
  };

  const handleSubDestinationChange = (e) => {
    const value = e.target.value;
    const newSubs = filters.subDestinations.includes(value)
      ? filters.subDestinations.filter((sub) => sub !== value)
      : [...filters.subDestinations, value];
    setFilters({ ...filters, subDestinations: newSubs });
  };

  const handleMonthChange = (e) => {
    const value = e.target.value;
    const newMonths = filters.months.includes(value)
      ? filters.months.filter((m) => m !== value)
      : [...filters.months, value];
    setFilters({ ...filters, months: newMonths });
  };

  const handleMinDurationChange = (e) => {
    let val = parseInt(e.target.value);
    if (val > filters.duration[1]) val = filters.duration[1];
    setFilters({ ...filters, duration: [val, filters.duration[1]] });
    setSliderChanged((prev) => ({ ...prev, duration: true }));
  };

  const handleMaxDurationChange = (e) => {
    let val = parseInt(e.target.value);
    if (val < filters.duration[0]) val = filters.duration[0];
    setFilters({ ...filters, duration: [filters.duration[0], val] });
    setSliderChanged((prev) => ({ ...prev, duration: true }));
  };

  const handleMinBudgetChange = (e) => {
    let val = parseInt(e.target.value);
    if (val > filters.budget[1]) val = filters.budget[1];
    setFilters({ ...filters, budget: [val, filters.budget[1]] });
    setSliderChanged((prev) => ({ ...prev, budget: true }));
  };

  const handleMaxBudgetChange = (e) => {
    let val = parseInt(e.target.value);
    if (val < filters.budget[0]) val = filters.budget[0];
    setFilters({ ...filters, budget: [filters.budget[0], val] });
    setSliderChanged((prev) => ({ ...prev, budget: true }));
  };

  const applyFilters = () => {
    let filteredTrips = mockTrips.filter((trip) => {
      const durationMatch = trip.duration.match(/(\d+)N/)?.[1]
        ? parseInt(trip.duration.match(/(\d+)N/)?.[1]) >= filters.duration[0] &&
          parseInt(trip.duration.match(/(\d+)N/)?.[1]) <= filters.duration[1]
        : true;
      const budgetMatch =
        parseInt(trip.price.replace(/[^0-9]/g, "")) >= filters.budget[0] &&
        parseInt(trip.price.replace(/[^0-9]/g, "")) <= filters.budget[1];
      const subDestMatch =
        filters.subDestinations.length === 0 ||
        filters.subDestinations.some((sub) => trip.title.includes(sub));
      const monthMatch =
        filters.months.length === 0 ||
        filters.months.some((month) =>
          trip.dates.includes(month.split("-")[0])
        );

      return durationMatch && budgetMatch && subDestMatch && monthMatch;
    });
    setTrips(filteredTrips);
  };

  const clearFilters = () => {
    const initialFilters = {
      destination: "India",
      subDestinations: [],
      duration: [2, 14],
      budget: [9000, 300000],
      months: [],
    };
    setFilters(initialFilters);
    setShowSubDestinations(false);
    setSliderChanged({ duration: false, budget: false });
    setTrips(mockTrips);
  };

  const closeSubDestinations = () => {
    setShowSubDestinations(false);
  };

  const getRangeTrackStyle = (type) => ({
    background: sliderChanged[type] ? "#ccc" : "#55C3BC",
    height: "4px",
    borderRadius: "2px",
    transition: "background 0.3s",
  });

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1>UPCOMING Community TRIPS</h1>
      </div>

      <div className={styles.mainContent}>
        <div className={`{styles.leftColumn} ${styles.desktopOnly}`}>
          <aside className={styles.filters}>
            <h2>Filters</h2>

            <div className={styles.filterSection}>
              <label>Destinations</label>
              <div className={styles.destinationLabels}>
                <span
                  className={`${styles.destLabel} ${
                    filters.destination === "India" ? styles.activeDest : ""
                  }`}
                  onClick={() => handleDestinationClick("India")}
                >
                  India <FaChevronRight className={styles.arrowIcon} />
                </span>
                <span
                  className={`${styles.destLabel} ${
                    filters.destination === "International"
                      ? styles.activeDest
                      : ""
                  }`}
                  onClick={() => handleDestinationClick("International")}
                >
                  International <FaChevronRight className={styles.arrowIcon} />
                </span>
              </div>
            </div>

            <div className={styles.filterSection}>
              <label>Duration (in nights)</label>
              <section
                className={styles.rangeSlider}
                style={getRangeTrackStyle("duration")}
              >
                <input
                  value={filters.duration[0]}
                  min="2"
                  max="14"
                  step="1"
                  type="range"
                  onChange={handleMinDurationChange}
                  className={styles.rangeInput}
                />
                <input
                  value={filters.duration[1]}
                  min="2"
                  max="14"
                  step="1"
                  type="range"
                  onChange={handleMaxDurationChange}
                  className={styles.rangeInput}
                />
              </section>
              <div className={styles.rangeValues}>
                {filters.duration[0]}N - {filters.duration[1]}N
              </div>
            </div>

            <div className={styles.filterSection}>
              <label>Budget (per person)</label>
              <section
                className={styles.rangeSlider}
                style={getRangeTrackStyle("budget")}
              >
                <input
                  value={filters.budget[0]}
                  min="9000"
                  max="300000"
                  step="1000"
                  type="range"
                  onChange={handleMinBudgetChange}
                  className={styles.rangeInput}
                />
                <input
                  value={filters.budget[1]}
                  min="9000"
                  max="300000"
                  step="1000"
                  type="range"
                  onChange={handleMaxBudgetChange}
                  className={styles.rangeInput}
                />
              </section>
              <div className={styles.rangeValues}>
                ₹{filters.budget[0].toLocaleString()} - ₹
                {filters.budget[1].toLocaleString()}
              </div>
            </div>

            <div className={styles.filterSection}>
              <label>Month</label>
              <div className={styles.monthCheckboxes}>
                {months.map((month) => (
                  <label key={month} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      value={month}
                      checked={filters.months.includes(month)}
                      onChange={handleMonthChange}
                    />
                    {month.split("-")[0]}
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.filterButtons}>
              <button onClick={clearFilters} className={styles.clearButton}>
                Clear Filters
              </button>
              <button onClick={applyFilters} className={styles.applyButton}>
                Apply
              </button>
            </div>
          </aside>

          {showSubDestinations && (
            <div className={styles.subDestinationsPanel}>
              <h4>
                {filters.destination === "India"
                  ? "Indian Destinations"
                  : "International Destinations"}
                <FaTimes
                  className={styles.closeIcon}
                  onClick={closeSubDestinations}
                />
              </h4>
              <div className={styles.subDestinations}>
                {(filters.destination === "India"
                  ? destinations.india
                  : destinations.international
                ).map((dest) => (
                  <label key={dest} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      value={dest}
                      checked={filters.subDestinations.includes(dest)}
                      onChange={handleSubDestinationChange}
                    />
                    {dest}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={styles.rightContent}>
          <div className={styles.monthCarousel}>
            <div className={styles.carouselInner}>
              {months.map((month) => (
                <button
                  key={month}
                  className={`${styles.monthButton} ${
                    filters.months.includes(month) ? styles.activeMonth : ""
                  }`}
                  onClick={() =>
                    handleMonthChange({ target: { value: month } })
                  }
                >
                  {month.split("-")[0]}
                </button>
              ))}
            </div>
          </div>
            
             {/* Mobile Filter Tabs */}
          <div className={styles.mobileTabs}>
            {["Destination", "Duration", "Budget", "Month"].map((tab) => (
              <button
                key={tab}
                className={`${styles.tabButton} ${
                  activeMobileTab === tab ? styles.activeTab : ""
                }`}
                onClick={() =>
                  setActiveMobileTab(activeMobileTab === tab ? null : tab)
                }
              >
                {tab}
              </button>
            ))}
            <button onClick={clearFilters} className={styles.resetTab}>
              Reset
            </button>
          </div>

            {/* Mobile Tab Panels */}
            {activeMobileTab === "Destination" && (
            <div className={styles.mobilePanel}>
              <div className={styles.destinationLabels}>
                <span
                  className={`${styles.destLabel} ${
                    filters.destination === "India" ? styles.activeDest : ""
                  }`}
                  onClick={() => handleDestinationClick("India")}
                >
                  India <FaChevronRight className={styles.arrowIcon} />
                </span>
                <span
                  className={`${styles.destLabel} ${
                    filters.destination === "International"
                      ? styles.activeDest
                      : ""
                  }`}
                  onClick={() => handleDestinationClick("International")}
                >
                  International <FaChevronRight className={styles.arrowIcon} />
                </span>
              </div>
            </div>
          )}
          {activeMobileTab === "Duration" && (
            <div className={styles.mobilePanel}>
              <section
                className={styles.rangeSlider}
                style={getRangeTrackStyle("duration")}
              >
                <input
                  value={filters.duration[0]}
                  min="2"
                  max="14"
                  step="1"
                  type="range"
                  onChange={handleMinDurationChange}
                  className={styles.rangeInput}
                />
                <input
                  value={filters.duration[1]}
                  min="2"
                  max="14"
                  step="1"
                  type="range"
                  onChange={handleMaxDurationChange}
                  className={styles.rangeInput}
                />
              </section>
              <div className={styles.rangeValues}>
                {filters.duration[0]}N - {filters.duration[1]}N
              </div>
            </div>
          )}
          {activeMobileTab === "Budget" && (
            <div className={styles.mobilePanel}>
               <section
                className={styles.rangeSlider}
                style={getRangeTrackStyle("budget")}
              >
                <input
                  value={filters.budget[0]}
                  min="9000"
                  max="300000"
                  step="1000"
                  type="range"
                  onChange={handleMinBudgetChange}
                  className={styles.rangeInput}
                />
                <input
                  value={filters.budget[1]}
                  min="9000"
                  max="300000"
                  step="1000"
                  type="range"
                  onChange={handleMaxBudgetChange}
                  className={styles.rangeInput}
                />
              </section>
              <div className={styles.rangeValues}>
                ₹{filters.budget[0].toLocaleString()} - ₹
                {filters.budget[1].toLocaleString()}
              </div>
            </div>
          )}
          {activeMobileTab === "Month" && (
            <div className={styles.mobilePanel}>
               <div className={styles.monthCheckboxes}>
                {months.map((month) => (
                  <label key={month} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      value={month}
                      checked={filters.months.includes(month)}
                      onChange={handleMonthChange}
                    />
                    {month.split("-")[0]}
                  </label>
                ))}
              </div>
            </div>
          )}


          <div className={styles.tripsGrid}>
            {trips.map((trip, index) => (
              <motion.div
                key={trip.id}
                className={styles.tripCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.tripImageContainer}>
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    width={300}
                    height={200}
                    className={styles.tripImage}
                  />
                </div>
                <div className={styles.tripInfo}>
                  <h3>{trip.title}</h3>
                  <div className={styles.tripDetails}>
                    <span>
                      <FaMoon /> {trip.duration}
                    </span>
                    <span>
                      <FaMapMarkerAlt /> {trip.location}
                    </span>
                    <span>
                      <FaCalendarAlt /> {trip.dates}
                    </span>
                  </div>

                  <div className={styles.priceBox}>
                    <span className={styles.oldPrice}>₹{trip.price}</span>
                    <span className={styles.currentPrice}>
                      ₹{trip.currentPrice || "Coming Soon"}
                    </span>
                  </div>

                  <div className={styles.arrow}>
                    <FaArrowRight className="arrow-right" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default UpcomingTrips;