import React from 'react'
import Irati from "../Asset/ireti.png";
import Bayo from "../Asset/bayo.png";
import Olagoke from "../Asset/olagoke text and profile.png";
import '../Style/Main1.css'

const Main1 = () => {
  return (
    <div>
      <div className="container">
        <p className="text-cont">Customer’s Review</p>
        <div className="customer-cont">
      <div className="comment-cont">
        <img src={Irati} alt="" className='immg' />
      </div>
      <div  className="comment-cont">
        <img src={Bayo} alt="" className='immg' />
      </div>
      <div  className="comment-cont">
        <img src={Olagoke} alt="" className='immg' />
      </div>
      </div>
    </div>
    </div>
  )
}

export default Main1


