import React from 'react'

const Cards = () => {
  return (
    <section className="cards">
    <div className="cards-container">
        <div className='btn'>
        <button>MAIN</button>
        <button>DESSERT</button>
        <button>DRINKS</button>
        </div>
        <div className="card">
            <div className='img'>
                <img src="	https://preview.colorlib.com/theme/tasty/images/dish-3.jpg" alt="" />
            </div>
            <div className='text'>
                <h3>Grilled Beef with potatoes</h3>
                <p>Meat, Potatoes, Rice, Tomatoe</p>
            </div>
            <div className='num'>
                <span>$29</span>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Cards

