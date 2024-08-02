import React from 'react'
import "./Customers.scss"
import customer1 from "../../assets/img/customers-1.png"
import customer2 from "../../assets/img/customers-2.png"
import customer3 from "../../assets/img/customers-3.png"
import { LiaStarSolid, LiaStarHalfAltSolid } from "react-icons/lia";


const Customers = () => {
  return (
    <div className='customers'>
        <div className="container">
            <div className="customers__block">
                <p className="customers__subtitle">
                    Testimonials
                </p>
                <p className="customers__title">
                    Some quotes from our happy customers
                </p>
                <div className="customers__wrapper">
                    <div className="customers__card">
                        <img className='customers__img' src={customer1} alt="" />
                        <div className="customers__star">
                            <LiaStarSolid />
                            <LiaStarSolid />
                            <LiaStarSolid />
                            <LiaStarSolid />
                            <LiaStarHalfAltSolid />
                        </div>
                        <p className="customers__desc">
                            “I love it! No more air fresheners”
                        </p>
                        <p className="customers__comment">
                            Luisa
                        </p>
                    </div>
                    <div className="customers__card">
                        <img className='customers__img' src={customer2} alt="" />
                        <div className="customers__star">
                            <LiaStarSolid />
                            <LiaStarSolid />
                            <LiaStarSolid />
                            <LiaStarSolid />
                            <LiaStarSolid />
                        </div>
                        <p className="customers__desc">
                            “Raccomended for everyone”
                        </p>
                        <p className="customers__comment">
                            Edoardo
                        </p>
                    </div>
                    <div className="customers__card">
                        <img className='customers__img' src={customer3} alt="" />
                        <div className="customers__star">
                            <LiaStarSolid />
                            <LiaStarSolid />
                            <LiaStarSolid />
                            <LiaStarSolid />
                            <LiaStarHalfAltSolid />
                        </div>
                        <p className="customers__desc">
                            “Looks very natural, the smell is awesome”
                        </p>
                        <p className="customers__comment">
                            Mart
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Customers
