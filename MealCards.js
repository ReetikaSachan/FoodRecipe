import React from 'react'
import { NavLink } from 'react-router-dom';

const MealCards = ({detail}) => {
  console.log(detail);
  
  return (
    <div className='meals'>
      {!detail ? "" : detail.map((currItem) => {
        return (
          <div className='mealImg'>
            <img src={currItem.strMealThumb} alt="meal" />
            <p>{currItem.strMeal}</p>
            <NavLink to={`/${currItem.idMeal}`}><button>View Recipe</button></NavLink>
          </div>
        )
      })
      }
      
    </div>
  )
}

export default MealCards
