import React, { useState } from 'react'

function filterByStars({handlefilters}) {
    
    
  
    const stars = [
        {
            _id:1,
            name: "⭐" ,
            value : [1]

        },
        {
            _id:2,
            name: "⭐⭐" ,
            value : [2]

        },
        {
            _id:3,
            name: "⭐⭐⭐" ,
            value : [3]

        },
        {
            _id:4,
            name: "⭐⭐⭐⭐" ,
            value : [4]

        },
        {
            _id:5,
            name: "⭐⭐⭐⭐⭐ " ,
            value : [5]

        }
      

    ]
    const handleStars = (e) =>{
    handlefilters(stars[e.target.value]['value'])

    }
  
  return (
    <div>
       <h3>Filter By Stars</h3>
    {
        stars.map((star,i)=>(
            <>
                <span class="form-check form-switch">
                 
            <label key={i} className="my-2 mx-5 border" for="contactChoice1">   
                    {star.name}
            </label> 
                    
            <input key={i} type="radio"  id='contactChoice1'  class="form-check-input" name="stars"  value={i}   onChange={handleStars} />
            </span>
            </>

        ))
    }
    </div>
  )
}

export default filterByStars