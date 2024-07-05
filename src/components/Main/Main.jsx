import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'


const Main = () => {

  //importing the context varaibles
  const {OnSent, recentPrompt, showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='Main '>
      <div className="logo flex justify-center">
        <img className='mt-3' src={assets.jarvis} alt="" />
      </div>

      <div className="main-container">

        {!showResult
        ?<>
        <div className="title">
        <p className='heading'>Hello, Explorer</p>
        <p className='greeting'>How can I help you today?</p>
      </div>

     <div className="card-slider flex flex-col gap-5">
     <marquee behavior="" direction="" scrollamount="5">
        
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
          </div>
          <div className="card">
            <p>Explain quantum computing like I'm five years old."
            </p>
          </div>
          <div className="card">
            <p>Comparative Analysis: "Compare and contrast the philosophies of Socrates and Plato.</p>
          </div>
        </div>
        </marquee>
  
        <marquee behavior="" direction="right" scrollamount="5">
          
        <div className="cards">
          <div className="card">
            <p>Write a sonnet about the bittersweet feeling of autumn leaves falling</p>
          </div>
          <div className="card">
            <p>Describe a world-weary detective with a hidden talent for playing the violin. </p>
          </div>
          <div className="card">
            <p>Write a short story about a young witch who discovers a magical artifact hidden in her grandmother's attic.</p>
          </div>
        </div>
        </marquee>
  
        <marquee behavior="" direction="left" scrollamount="5">
          
        <div className="cards card-3">
          <div className="card">
            <p>Write a Python function to calculate the factorial of a number</p>
          </div>
          <div className="card">
            <p>"I have this code [insert code snippet], but it's giving me an error. Can you help me fix it?</p>
          </div>
          <div className="card">
            <p>Describe an efficient algorithm for sorting a list of numbers in ascending order.</p>
          </div>
        </div>
        </marquee>

     </div>
        </> : <div className='result'>
          <div className="result-title  text-white flex gap-3 items-center">
          <img className='w-8' src={assets.user_logo} alt="" />
          <p>{recentPrompt}</p>
           
          </div>

          <div className="result-data text-white flex flex-col items-start gap-2">
            <div className='flex gap-3 items-center'>
            <img className='w-8' src={assets.jarvis_logo} alt="" />
            <p>Jarvis</p>
            </div>
            {loading
            ?<div className='loader'>
              <hr />
              <hr />
              <hr />
            </div> : <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
            
          </div>
          </div>}



      </div>
    </div>
  )
}

export default Main
