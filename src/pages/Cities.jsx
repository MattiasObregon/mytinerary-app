import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import apiUrl from '../apiUrl';
import CardCity from '../components/CardCity';
import Search from '../components/Search';
import NotFound from './NotFound';
import Footer from '../components/Footer';

export default function Cities() {
  const [cities, setCities] = useState(null);
  const [reEffect, setReEffect] = useState(true);
  const text = useRef();

  useEffect(() => {
    const searchCity = text.current.value
        .toLowerCase()
        .trim();
    axios(apiUrl + 'cities')
      .then(res => {
        const filteredCities = res.data.response.filter(city =>
          city.city.toLowerCase().startsWith(searchCity)
        );
        setCities(filteredCities);
      })
      .catch(err => console.log(err));
  }, [reEffect]);

  function handleFilter() {
    console.log(text.current.value);
    setReEffect(!reEffect);
  }

  return (
    <div className=" flex flex-col items-center">
      <div className="flex items-center space-x-2 px-4 py-2 m-[60px] rounded-md w-64 bg-indigo-300">
        <Search />
        <input
          ref={text}
          type="text"
          name="text"
          id="text"
          className="w-full focus:outline-none"
          placeholder="Search your city"
          onKeyUp={handleFilter}
        />
      </div>
      {cities === null ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : cities.length === 0 ? (
        <div>
          <p>City not found</p>
          <NotFound />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {cities.map(city => (
            <CardCity key={city._id} item={city} id={city._id} />
          ))}
        </div>
      )}
        <Footer />
    </div>
  );
}