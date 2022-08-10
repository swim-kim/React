import React from 'react'
import Banner from '../../components/Banner'
import requests from '../../api/requests'
import Row from '../../components/Row';

export default function Mainpage(){
    return(
        <div>
                <Banner/>
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="Trending Now"
        id = "TN"
        fetchUrl={requests.fetchTrending}
      />
      <Row 
        title="Top Rated"
        id="TR"
        fetchUrl={requests.fetchTopRated}
      />
      <Row 
        title="Action Movies"
        id = "AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        id = "CM"
        fethUrl={requests.fetchComedyMovies}
      />
      <Row
        title="Horror Movies"
        id="HM"
        fetchUrl={requests.fetchHorroryMovies}
      />
      <Row 
        title="Romance Movies"
        id = "RM"
        fetchUrl={requests.fetchRomanceMovies}
      />
        </div>
    )
};