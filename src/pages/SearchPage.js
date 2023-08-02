import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../styles/Details.css';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { fetchDetailAPI } from '../redux/detail/detailSlice';
import cloudCover from '../assets/cloud-cover.png';

const Details = () => {
  const { name, lat, lon } = useParams();
  const dispatch = useDispatch();
  const detailInfo = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(fetchDetailAPI({ lat, lon }));
  }, [lat, lon, dispatch]);

  if (!detailInfo) {
    return (
      <>
        <div className="loading"><AiOutlineLoading3Quarters className="loading-icon  text-white text-4xl" /></div>
      </>
    );
  }
  const transformCelsius = (kelvin) => Math.round(kelvin - 273.15);
  return (
    <div className="detail-container bg-sky-500 py-10">
      <div className="image-container w-[400px] md:w-[800px]">
        <img src={cloudCover} alt="cloud-cover" className="cloud-image" />
      </div>
      <header className="header-container w-[50%] mx-auto text-center pt-[10rem] pb-[5rem] mb-2 ">
        <h2 className="text-2xl md:text-4xl font-semibold text-white mb-2 capitalize">{name}</h2>
        <h2 className="text-4xl md:text-6xl ms-5 text-white font-medium mb-2">
          {transformCelsius(detailInfo.main.temp)}
          °
        </h2>
        <h2 className="text-white text-3xl mb-2">{detailInfo.weather[0].main}</h2>
        <span className=" font-normal text-2xl text-white me-4 tracking-wider">
          H:
          {transformCelsius(detailInfo.main.temp_max) }
          °
        </span>
        <span className="font-normal text-2xl text-white tracking-wider">
          L:
          {transformCelsius(detailInfo.main.temp_min)}
          {' '}
          °
        </span>
      </header>

      <div className="grid md:grid md:grid-cols-2 gap-5 md:w-[80%] md:mx-auto w-[100%] px-10 md:px-0 ">
        <div className="detail-info-card flex-1">
          <h2 className="">COORDINATES</h2>
          <div className="flex justify-between item">
            <span>Latitude</span>
            <span>{detailInfo.coord.lat}</span>
          </div>
          <div className="flex justify-between item">
            <span>Longitude</span>
            <span>{detailInfo.coord.lon}</span>
          </div>
        </div>

        <div className="detail-info-card flex-1">
          <h2>WEATHER</h2>
          <div className="flex justify-between item">
            <span>Main</span>
            <span>{detailInfo.weather[0].main}</span>
          </div>
          <div className="flex justify-between item">
            <span>Description</span>
            <span>{detailInfo.weather[0].description}</span>
          </div>
        </div>

        <div className="detail-info-card flex-1">
          <h2>BASESTATION</h2>
          <div className="flex justify-between item">
            <span>Temperature</span>
            <span>{detailInfo.main.temp}</span>
          </div>
          <div className="flex justify-between item">
            <span>Humidity</span>
            <span>{detailInfo.main.humidity}</span>
          </div>
        </div>

        <div className="detail-info-card flex-1">
          <h2>Pressure</h2>
          <div className="flex justify-between item">
            <span>Sea Level</span>
            <span>
              {detailInfo.main.sea_level}
              {' '}
&nbsp; hpa
            </span>
          </div>
          <div className="flex justify-between item">
            <span>Ground Level</span>
            <span>
              {detailInfo.main.grnd_level}
              {' '}
&nbsp; hpa
            </span>
          </div>
        </div>

        <div className="detail-info-card flex-1 md:col-span-2">
          <h2>WIND</h2>
          <div className="flex justify-between item">
            <span>Speed</span>
            <span>{detailInfo.wind.speed}</span>
          </div>
          <div className="flex justify-between item">
            <span>Direction</span>
            <span>{detailInfo.wind.deg}</span>
          </div>
          <div className="flex justify-between item">
            <span>Gust</span>
            <span>
              {detailInfo.wind.gust}
              {' '}
&nbsp; m/s
              {' '}
            </span>
          </div>
        </div>

        <div className="detail-info-card flex-1">
          <h2>VISIBILITY</h2>
          <div className="flex justify-between item">
            <span>Visible</span>
            <span>{detailInfo.visibility}</span>
          </div>
        </div>

        <div className="detail-info-card flex-1">
          <h2>Clouds</h2>
          <div className="flex justify-between item">
            <span>1h</span>
            <span>
              {detailInfo.clouds.all}
              {' '}
              %
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Details;
