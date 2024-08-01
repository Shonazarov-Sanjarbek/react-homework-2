import React from 'react'
import "./Products.scss"
import card1 from "../../assets/img/products-card-1.png"
import card2 from "../../assets/img/products-card-2.png"
import card3 from "../../assets/img/products-card-3.png"
import card4 from "../../assets/img/products-card-4.png"
import card5 from "../../assets/img/products-card-5.png"
import card6 from "../../assets/img/products-card-6.png"
import card7 from "../../assets/img/products-card-7.png"
import card8 from "../../assets/img/products-card-8.png"


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
    {
        id: 5,
        url: card5,
        title: "Product name",
        price: "9.99$",
    },
    {
        id: 6,
        url: card6,
        title: "Fragrant Cinnamon",
        price: "9.99$",
    },
    {
        id: 7,
        url: card7,
        title: "Summer Cherries",
        price: "9.99$",
    },
    {
        id: 8,
        url: card8,
        title: "Clean Lavander",
        price: "9.99$",
    },
]
const Products = () => {
  return (
    <div className='container'>
        <div className="products">
            <div className="products__subtitle">
                <p className="products__title">
                    Products
                </p>
                <p className="products__text">
                    Order it for you or for your beloved ones 
                </p>
            </div>
            <div className="products__wrapper">
                {
                    data?.map((el) => (
                    <div className="products__card">
                        <div key={el.id} className="products__img">
                            <img src={el.url} alt="" />
                        </div>
                        <div className="products__content">
                            <p className="products__desc">
                                {el.title}
                            </p>
                            <p className="products__price">
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

export default Products
