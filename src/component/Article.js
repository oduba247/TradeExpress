import React from 'react'
import Apple1 from '../Asset/Group 229.png'
import Google1 from '../Asset/Group 119.png'
import '../Style/Article.css'

const Article = () => {
  return (
    <div>
        <div>
            <div className='ready-cont'>
                <p>Ready to trade Buy/Sell Cryptocurrecies in just 10 minutes ?</p>
                <p className='text-cont'>Create your account for free and start trading today!</p>
                <button className='get-started-cont'>Get Started</button>
             <section className='playstore'>   <img src={Apple1} alt="" /> <img src={Google1} alt="" /></section>
            </div>
        </div>

    </div>
  )
}

export default Article