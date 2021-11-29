import React, { useEffect, useState } from "react";
import Recipe from './Recipe';
import './App.css';
// source video https://www.youtube.com/watch?v=U9T6YkEDkMo
//Edamam API: https://developer.edamam.com/login

const App = () => {
  //obtaining the keys
  const APP_ID = '01660a0e';
  const APP_KEY = 'd5f51a8913175ab8712e78882793aa46';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('vegan');

  // Ran into a problem here "useEffect" has a missing dependency "getRecipes"
  useEffect(() => { getRecipes(); }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  // Ran into a problem here..."updateSearch" assigned a value but never used..Terminal recommended the next line but it didn't help.
  // eslint-disable-next-line

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      {/* Ran into a problem where it isn't taking my typed text on the live page | Chrome Dev notes: A page or script is accessing at least one of navigator.userAgent, navigator.appVersion, and navigator.platform. Starting in Chrome 101, the amount of information available in the User Agent string will be reduced. To fix this issue, replace the usage of navigator.userAgent, navigator.appVersion, and navigator.platform with feature detection, progressive enhancement, or migrate to navigator.userAgentData.*/}
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
