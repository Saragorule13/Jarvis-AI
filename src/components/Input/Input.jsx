import React, { useContext, useState } from 'react'
import './Input.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'



const Input = () => {

  const {OnSent, recentPrompt, showResult,loading,resultData,setInput,input} = useContext(Context)




  return (
    <div className='main-bottom'>
      <div className="search-box">
        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Ask Jarvis.."/>
        <img className='cursor-pointer' onClick={()=>OnSent()} src={assets.send_icon} alt="send_icon" />
      </div>
      <p className='bottom-info'>Jarvis may display wrong info. Double-check the results</p>
    </div>
  )
}

export default Input
