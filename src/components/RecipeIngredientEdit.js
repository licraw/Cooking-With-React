import React from 'react'

export default function RecipeIngredientEdit({ ingredient, handleIngredientChange }) {
    // const {
    //     ingredient,
    //     handleIngredientChange
    // } = props

    function handleChanges(changes) {
        handleIngredientChange(ingredient.id, { ...ingredient, ...changes })
    }

    return (
        <>
          <input 
            className="recipe-edit__input" 
            type="text"
            value={ingredient.name}
            onInput={(e) => handleChanges({ name: e.target.value })}
          />
          <input 
            className="recipe-edit__input" 
            type="text"
            value={ingredient.amount}
            onInput={(e) => handleChanges({ amount: e.target.value })}
          />
          <button className="btn btn--danger">&times;</button> 
        </>
    )
}
