import React from 'react'
import layer1 from '../assets/layer-1.png'
import layer2 from '../assets/layer-2.png'
import layer3 from '../assets/layer-3.png'
import man from '../assets/man.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-lg-7">
                <h2 style={{fontSize:'70px',marginTop:'140px'}}>Lessons and insights <span style={{color:'green'}}>from 8 years</span></h2>
                <p style={{fontSize:'20px',marginTop:'10px'}}>Where to grow your business as a photographer: site or social media?</p>
                <button className='mt-3 ms-3 text-light' style={{marginTop:'12px',background:'green',border:'none',borderRadius:"5px",paddingLeft:'38px',paddingRight:'38px',paddingTop:'8px', paddingBottom:'8px'}}>Register</button>
            </div>
            <div className="col-lg-5">
              <img src={layer1} style={{marginTop:'70px'}} alt="" />
              <img src={layer2} style={{width:'170px', marginTop:'-530px', marginLeft:'30px'}} alt="" />
              <img src={layer3} style={{marginTop:'-590px',marginLeft:'-50px'}} alt="" />
              <img src={man} style={{marginTop:'-360px',marginLeft:'20px'}} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Header