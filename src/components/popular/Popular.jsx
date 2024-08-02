import React from 'react'
import "./Popular.scss"
import card1 from "../../assets/img/products-card-1.png"
import card2 from "../../assets/img/products-card-2.png"
import card3 from "../../assets/img/products-card-3.png"
import card4 from "../../assets/img/products-card-4.png"


let data = [
    {
        id: 1,
        url: card1,
        title: "Spiced Mint",
        price: "9.99$",
    },
    {
        id: 2,
        url: card2,
        title: "Sweet Straweberry",
        price: "9.99$",
    },
    {
        id: 3,
        url: card3,
        title: "Cool Blueberries",
        price: "9.99$",
    },
    {
        id: 4,
        url: card4,
        title: "Juicy Lemon",
        price: "9.99$",
    },

]
const Popular = () => {
  return (
    <div className='container'>
 <div className="popular">
            <div className="popular__subtitle">
                <p className="popular__title">
                    Popular
                </p>
                <p className="popular__text">
                    Our top selling product that you may like 
                </p>
            </div>
            <div className="popular__wrapper">
                {
                    data?.map((el) => (
                    <div className="popular__card">
                        <div key={el.id} className="popular__img">
                            <img src={el.url} alt="" />
                        </div>
                        <div className="popular__content">
                            <p className="popular__desc">
                                {el.title}
                            </p>
                            <p className="popular__price">
                               {el.price}
                            </p>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Popular
