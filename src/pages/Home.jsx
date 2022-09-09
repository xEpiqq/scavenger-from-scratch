import React from 'react'
import './home.scss'
import {useState, useEffect} from 'react'
import Axios from 'axios'
import {Nav} from '../nav'
import { Link } from 'react-router-dom'
import { demo_vid, grey_arrow } from '../images'

function Home() {
  const [info, setInfo] = useState([])
  
  const getInfo = () => {
    Axios.get("http://localhost:8090/").then(
      (response) => {
        console.log(response)
        setInfo(response.data.name)
      }
    )
  }

  return (
    <div className='home'>
        <Nav />
        <div className='hero'>
            <div className='hero_left'>
                <div className='hero_text'>
                    <h1> AI <span>Goldmine</span> <br />for web devs</h1>
                        <Link className='nav_link' to=''><button className='free_trial_two'>Start Free Trial</button></Link>
                    <div className='hero_text_bottom'>
                        <p>Or <span>LITERALLY</span> just try now  </p>
                        <img src={grey_arrow} />
                    </div>
                </div>
            </div>
            <div className='hero_right'>
                <img src={demo_vid} />
            </div>
        </div>
        <div className='aesthetic_div'/>
        <div className='transition_div'>
            <div className='transition_div_left'>Humans absolutely decimated</div>
            <div className='transition_div_right'>Over<p> 200x </p>faster</div>
        </div>
        <div className='meet_sally'>
            <h1>-- meet sally, 3 different vector scroll animations shes pulling hair</h1>
            <h1>-- sally is paid by the hour, she cost much</h1>
            <h1>-- sally gets dominated by scavenger for 1/30th of the monthly cost!</h1>
            <h1> DISPLAY THE POWERFUL AI WITH A SICK GIF, POSSIBLY BEFORE SALLY</h1>
            <h1>-- under the hood, mechanism + real dashboard screenshots</h1>
            <h1>-- checkout the features, autodialer, auto profile creation, management, etc</h1>
            <h1>-- Here's the deal, we give you $100,000's dollars in potential customers... </h1>
            <h1>-- You give us your scraps, fair enough?</h1>


        </div>
    </div>
  )
}

export default Home