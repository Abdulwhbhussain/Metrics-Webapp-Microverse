import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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
        <Search onSubmit={handleSubmit} className="flex justify-around w-[90%]">
          <input placeholder="Search City" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} className=" outline-none border-b-2 text-white border-b-white bg-inherit placeholder:text-white  md:mb-0" />
          <button type="submit" onClick={handleSubmit} className=" md:hidden block hover:bg-sky-700 text-white bg-sky-800 rounded-md py-1 px-3">Search</button>
        </Search>
      </div>
      <div className="city-container grid grid-cols-2 md:grid-cols-5 border border-t-white">
        {citiesData.map((city) => <CityCard key={city.name} city={city} />)}
      </div>
    </div>

  );
}

const Search = styled.div`
  background-color: #1E213A;
  color: #E7E7EB;
  border-radius: 10px;
  padding: 10px;
  width: 50%;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  input {
    width: 80%;
  }
  button {
  }
`;

export default Home;
