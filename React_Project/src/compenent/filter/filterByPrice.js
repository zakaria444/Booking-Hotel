import React, { useState } from 'react'

function filterByPrice({handlefilters}) {
    
    
  
    const prices = [
        {
            _id:1,
            name: "ALL" ,
            value : []

        },
        {
            _id:2,
            name: "100DH to 200DH" ,
            value : [100,200]

        },
        {
            _id:3,
            name: "200DH to 300DH" ,
            value : [200,300]

        },
        {
            _id:4,
            name: "300DH to 400DH" ,
            value : [300,400]

        },
        {
            _id:5,
            name: "more" ,
            value : [300,2000]

        }
      

    ]
    const handlePrice = (e) =>{
    handlefilters(prices[e.target.value]['value'])

    }
  
  return (
    <div>
       <h3 className='border text-primary'>Filter By Price</h3>
    {
        prices.map((price,i)=>(
            <div>
                  <label key={i} className="my-2 mx-3 border">   
                    
            <input key={i} type="radio" class="form-check-input" name="price"  value={i}   onChange={handlePrice} />
                  {price.name}
   
            </label> 
            </div>
        ))
    }
    </div>
  )
}

export default filterByPrice