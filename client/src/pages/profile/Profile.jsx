import './profile.css'
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";

const Profile = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[2]
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

//   const {data, loading, error} = useFetch(`/hotels/find/${id}`)
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      {/* <Header type="list" /> */}
      {/* {loading ? (
        "loading"
      ) : ( */}
        <div className="profileContainer">
            Profile
        </div>
      {/* )} */}
    </div>
  );
};

export default Profile;
