import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import abudhabi from '../assets/abu-dhabi.jpg';
import amsterdam from '../assets/amsterdam.jpeg';
import bangkok from '../assets/bangkok.jpeg';
import beijing from '../assets/beijing.jpeg';
import berlin from '../assets/berlin.jpg';
import cairo from '../assets/cairo.jpeg';
import hongkong from '../assets/HongKong.jpg';
import london from '../assets/London.jpg';
import moscow from '../assets/moscow.jpg';
import mumbai from '../assets/mumbai.jpeg';
import newyork from '../assets/newYork.jpeg';
import paris from '../assets/paris.jpeg';
import rio from '../assets/Rio.jpeg';
import rome from '../assets/romee.jpeg';
import seoul from '../assets/seoul.jpeg';
import singapore from '../assets/singapore.jpg';
import spain from '../assets/spainn.jpg';
import stockholm from '../assets/stockholm.jpeg';
import tokyo from '../assets/tokyo.jpeg';
import yangon from '../assets/yangon.jpg';
import './CityCard.css';

function searchCityName(name) {
  if (name === 'Abu Dhabi') return abudhabi;
  if (name === 'Amsterdam') return amsterdam;
  if (name === 'Bangkok') return bangkok;
  if (name === 'Beijing') return beijing;
  if (name === 'Berlin') return berlin;
  if (name === 'Cairo') return cairo;
  if (name === 'Hong Kong') return hongkong;
  if (name === 'London') return london;
  if (name === 'Moscow') return moscow;
  if (name === 'Mumbai') return mumbai;
  if (name === 'New York') return newyork;
  if (name === 'Paris') return paris;
  if (name === 'Rio De Janeiro') return rio;
  if (name === 'Rome') return rome;
  if (name === 'Seoul') return seoul;
  if (name === 'Singapore') return singapore;
  if (name === 'Spain') return spain;
  if (name === 'Stockholm') return stockholm;
  if (name === 'Tokyo') return tokyo;
  if (name === 'Yangon') return yangon;
  return '';
}

function CityCard({ city }) {
  return (
    <Link to={{ pathname: `/details/${city.name}/${city.lat}/${city.lon}` }} className="">
      <Card className="card">
        <figure>
          <img src={searchCityName(city.name)} style={{}} className="" alt="cloud" />
        </figure>
        <ul className="">
          <li>
            {city.name}
            ,
            {city.country}
          </li>
          <li>
            Latitude:
            {city.lat}
          </li>
          <li>
            Longitude:
            {city.lon}
          </li>
        </ul>
      </Card>
    </Link>

  );
}

const Card = styled.div`
  border: 2px solid grey;
  border-radius: 10px;
  width: 48%;
  margin: 10px;
  figure {
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  min-width: 400px;
  display: inline-block;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  ul {
    list-style: none;
    li {
      font-size: 1.2rem;
      text-decoration: none !important;
    }
  }
`;

CityCard.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    backgroundImageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default CityCard;
