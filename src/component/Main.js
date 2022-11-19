import React from 'react'
import Num1 from '../Asset/emojione-monotone_keycap-1.png'
import Phone from '../Asset/phone.png'
import Piggy from '../Asset/piggy-bank/rafiki.png'
import Num2 from '../Asset/emojione-monotone_keycap-2.png'
import Bitcoin from '../Asset/bitcoin/cuate.png'
import Num3 from '../Asset/emojione-monotone_keycap-3.png'
import '../Style/Main.css'
const Main = () => {
  return (
    <div >
        <div className='container'>
    <div className='container5' >
        <div >
        <p  className="text-cont1">  <img src={Num1} alt="" /> Create a free Account </p> <br />
        <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our <br />
            easy process to set up your profile.</p>
        </div>
        <div>
            <img src={Phone} alt="" />
        </div>
    </div>
    <div  className='container6'>
        <img src={Piggy} alt="" />
        <div >
        <p  className="text-cont1">  <img src={Num2} alt="" /> Deposit </p> <br />
        <p>Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrawal.</p>
        </div>
    </div>
    <div className='container7' >
        <div >
        <p  className="text-cont1">  <img src={Num3} alt="" />Buy/ Sell Crypto </p> <br />
        <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our <br /> easy process to set up your profile.</p>
        </div>
        <div>
            <img src={Bitcoin} alt="" />
        </div>
        
    </div>
    <div >
       
    </div>
    </div>
    
    </div>
  )
}

export default Main