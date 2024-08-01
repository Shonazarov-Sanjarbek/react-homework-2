import React from 'react'
import "./Hero.scss"

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="hero__block">
                <div className="hero__box">
                    <div className="hero__subtitle">
                        <p className="hero__title">
                            The nature candle
                        </p>
                        <p className="hero__text">
                            All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments
                        </p>
                    </div>
                    <div className="hero__btn">
                        <button>
                            <span>
                                Discovery our collection
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
