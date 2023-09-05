import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItineraryArrowDown from "../components/ItineraryArrowDown";
import ItineraryArrowUp from "../components/ItineraryArrowUp";
import footer from "../components/Footer";
import NavBar from "../components/NavBar";
import city_action from "../store/actions/cities";
import itinerary_action from "../store/actions/itineraries";

const { read_city } = city_action;
const { read_itineraries_from_city } = itinerary_action;

export default function CityDetail() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [showDetails, setShowDetails] = useState({});
  const { city_id } = useParams();
  const city = useSelector((store) => store.cities.city);
  const itineraries = useSelector((store) => store.itineraries.itineraries_from_city);

  useEffect(() => {
    dispatch(read_city({ id: city_id }));
    dispatch(read_itineraries_from_city({ city_id: city_id }));
  }, [dispatch, city_id]);

  // Funcion para alternar los detalles del itinerario cuando se hace clic en el boton correspondiente
  const toggleDetails = (index) => {
    setShowDetails((prevShowDetails) => ({
      ...prevShowDetails,
      [index]: !prevShowDetails[index],
    }));
  };

  return (
    <div
      className="min-h-screen relative flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${city.photo})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-0 w-full">
        <div className="pt-10 md:pt-20 lg:pt-[32px] md:pr-10 lg:pr-[218px] md:pl-10 lg:pl-[219px]"> <NavBar /> </div>
      </div>
      <div className="relative z-10 text-white text-center mt-[100px]">
        <h1 className="text-[60px] font-bold">{city.city}</h1>
        <p className="mt-2 mt-4 max-w-[777px] text-justify">{city.description}</p>
        <button
          onClick={() => setShow(!show)}
          className="mt-4 bg-indigo-600 text-white px-3 py-1 rounded-md"
        >
          {show ? "Hide Itineraries ↑" : "View Itineraries ↓"}
        </button>
        {show && (
          <div className="mt-4 container">
            {itineraries.length === 0 ? (
              <p>There aren't itineraries</p>
            ) : (
              itineraries.map((itinerary, index) => (
                <div key={index} className="flex flex-col items-center mt-2 border bg-white rounded-md p-4">
                  <p className="text-[30px] text-black">{itinerary.name}</p>
                  <img
                    src={itinerary.photo}
                    alt={itinerary.name}
                    className="w-[725px] h-[544px] mt-2"
                  />
                  <button className="mt-[10px]" onClick={() => toggleDetails(index)}>
                    {showDetails[index] ? <ItineraryArrowUp /> : <ItineraryArrowDown />}
                  </button>

                  {showDetails[index] && (
                    <div className="mt-2 flex text-black">
                      <div className="mr-[100px]">
                        <p>User: </p>
                        <img
                          src={itinerary.city_id.admin_id.photo}
                          alt={itinerary.city_id.admin_id.name}
                          className="w-[100px] h-[100px] object-cover rounded-full"
                        />
                        <p className="text-gray-500">{itinerary.city_id.admin_id.name}</p>
                      </div>

                      <div className="text-black ml-[70px] mr-[80px]">
                        <p>Hashtags:</p>
                        <div className="flex flex-col items-start">
                          {itinerary.tags.map((tag, tagIndex) => (
                            <p key={tagIndex} className="text-gray-500">{tag}</p>
                          ))}
                        </div>
                      </div>

                      <div className="text-black mx-[60px]">
                        <p>Duration:</p>
                        <p className="text-gray-500">
                          {itinerary.duration % 60 === 0 ? (
                            `${Math.floor(itinerary.duration / 60)} hours`
                          ) : (
                            `${Math.floor(itinerary.duration / 60)} hours ${itinerary.duration % 60} minutes`
                          )}
                        </p>
                      </div>


                      <div className="text-black ml-[40px]">
                        <p>Price:</p>
                        <p className="text-gray-500">{itinerary.price}</p>
                      </div>
                    </div>
                  )}

                  <div>
                    <button
                      onClick={() => setShow2(!show2)}
                      className="mt-4 bg-indigo-600 text-white px-3 py-1 rounded-md"
                    >
                      {show2 ? "Hide Comments ↑" : "View Comments ↓"}
                    </button>
                    {show2 ? (
                      <p className="text-black">Activities and comments under construction</p>
                    ) : null}
                  </div>

                </div>
              ))
            )}
          </div>
        )}

      </div>
    </div>
  );
}
