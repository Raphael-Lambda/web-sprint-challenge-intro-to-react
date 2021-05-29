import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Character from './components/Character'
import axios from 'axios'

const App = () => {

  // create a slice of state for the data coming from the API
  const [ charList, setCharList ] = useState([])
  const [details, setDetails] = useState('');
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
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then( response => {
      setCharList(response.data);
    })
    .catch( err => console.log(err))
  },[])


  return (
    <div className="App">
      <Header searchCharacter={searchCharacter}/>
      {
        charList? charList.map((char) => {
          const charName = char.name.toLowerCase();
          if(search === '' || charName.includes(search.toLowerCase())){
          return (<Character key={char.name} char={char} details={details} displayDetails={displayDetails}/>)}}):null
      }
    </div>
  );
}

export default App;
