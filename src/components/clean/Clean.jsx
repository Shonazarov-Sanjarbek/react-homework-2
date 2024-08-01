import React from 'react'
import "./Clean.scss"
import img from "../../assets/img/clean.png"


const Clean = () => {
  return (
    <div className='clean'>
        <div className="container">
            <div className="clean__block">
                <div className="clean__content">
                    <p className="clean__subtitle">
                        Clean and fragrant soy wax
                    </p>
                    <p className="clean__title">
                        Made for your home and for your wellness
                    </p>
                    <ul className="clean__collection">
                        <li className="clean__item">
                            Eco-sustainable:All recyclable materials, 0% CO2 emissions
                        </li>
                        <li className="clean__item">
                            Hyphoallergenic: 100% natural, human friendly ingredients 
                        </li>
                        <li className="clean__item">
                            Handmade: All candles are craftly made with love.
                        </li>
                        <li className="clean__item">
                            Long burning: No more waste. Created for last long.
                        </li>
                    </ul>
                    <div className="clean__btn">
                        <button>
                            <span>
                                Learn more
                            </span>
                        </button>
                    </div>
                </div>
                <div className="clean__img">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clean
