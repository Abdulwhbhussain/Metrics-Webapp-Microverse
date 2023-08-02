import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import citiesData from '../redux/citiesData';
import CityCard from '../components/CityCard';
import '../styles/Home.css';

function Home() {
  const [inputSearch, setInputSearch] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${inputSearch}`);
    setInputSearch('');
  };

  return (
    <div>
      <div className="search-input-container flex justify-center w-[100%] my-10">
        <form onSubmit={handleSubmit} className="flex justify-around w-[90%]">
          <input placeholder="Search City" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} className=" outline-none border-b-2 text-white border-b-white bg-inherit placeholder:text-white  md:mb-0" />
          <button type="submit" onClick={handleSubmit} className=" md:hidden block hover:bg-sky-700 text-white bg-sky-800 rounded-md py-1 px-3">Search</button>
        </form>
      </div>
      <div className="city-container grid grid-cols-2 md:grid-cols-5 border border-t-white">
        {citiesData.map((city) => <CityCard key={city.name} city={city} />)}
      </div>
    </div>

  );
}
export default Home;
