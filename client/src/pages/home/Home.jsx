import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="homeSection">
      {/* <Navbar /> */}
      {/* <Header/> */}
      <div className="homeSearchBlock">
        {/* <FontAwesomeIcon icon={faBed} className="headerIcon" /> */}
        <input
          type="text"
          placeholder="Where are you going?"
          className="headerSearchInput"
          onChange={(e) => setDestination(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

      </div>
      {/* <div className="homeContainer"> */}
        {/* <Featured/> */}
        {/* <h1 className="homeTitle">Homes guests love</h1> */}
        {/* <FeaturedProperties/> */}
      {/* </div> */}
      
    </div>
  );
};

export default Home;
