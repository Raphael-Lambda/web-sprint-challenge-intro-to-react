import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Character from './components/Character'
import axios from 'axios'
import parseFilms from './helper'

const App = () => {


  //state for the data coming from the API
  const [ charList, setCharList ] = useState([])
  //state for the display of more information for a character
  const [details, setDetails] = useState('');
  //state for the user's character search
  const [search, setSearch] = useState('');

  function searchCharacter(evt){
    setSearch(evt.target.value)
  }

  function displayDetails(name){
      if(details === name){
        setDetails('')
      }
      else{
        setDetails(name)
      }
  }

  // Fetching characters from the APIs at first render
  useEffect(() => {
  //   axios
  //   .get('https://swapi.dev/api/people')
  //   .then( response => {
  //     const charinfo = parseFilms(response.data);
  //     axios
  //     .get('https://swapi.dev/api/films')
  //     .then(response2 => {
  //     const filmsInfo = parseFilms(response2.data.results);
  //     setCharList([...charinfo, ...filmsInfo]);
  //     })
  //     .catch( err => console.log(err));
  //   })
  //   .catch( err => console.log(err))
  // }

  // using Promise.all
    const chars = axios.get('https://swapi.dev/api/people');
    const films = axios.get('https://swapi.dev/api/films');
    Promise.all([chars, films]).then(res => {
        const charInfo = parseFilms(res[0].data);
        const filmsInfo = parseFilms(res[1].data.results);
        setCharList([...charInfo, ...filmsInfo]);
      })
      .catch(err => console.log(err))
    }
  ,[])

  return (
    <div className="App">
      <Header searchCharacter={searchCharacter}/>
      {
        charList? charList.map((char) => {
          const main = char.name || char.title
          const charName = main.toLowerCase();
          if(search === '' || charName.includes(search.toLowerCase())){
          return (<Character key={char.name || char.episode_id} char={char} details={details} displayDetails={displayDetails}/>)}}):null
      }
    </div>
  );
}

export default App;
