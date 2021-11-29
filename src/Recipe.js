import React from 'react';
import style from './recipe.module.css';
// Passing props into component
const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>{calories}</p>
            {/* <img className={style.image} src={image} alt="photos"></img> */}
            <img src={image} alt="photos"></img>
        </div>
    );
}

export default Recipe;