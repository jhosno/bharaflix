import React from "react";
import "./HomeScreen.css";
import Navbar from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./Request";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      {/* Navbar */}
      <Navbar />
      {/* Banner */}
      <Banner />
      {/* Rows */}

      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginal}
        isLargeRow
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      {/* <div className='test'></div>*/}
    </div>
  );
};

export default HomeScreen;
