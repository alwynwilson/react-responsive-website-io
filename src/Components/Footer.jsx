import React from 'react'
import logo from '../assets/Logo.png'
import S1 from '../assets/clients/S1.png'
import S2 from '../assets/clients/S2.png'
import S3 from '../assets/clients/S3.png'
import S4 from '../assets/clients/S4.png'

function Footer() {
  return (
    <div className='container-fluid' style={{background:'rgb(188, 188, 188)', marginTop:'25px'}}>
        <div className="d-flex row">
            <div className="row-1 text-center justify-content-center align-items-center" style={{ marginTop:'100px',marginBottom:'100px'}}>
                <h2>Pellentesque suscipit fringilla libero eu.</h2>
                <button className='mt-3 ms-3 text-light' style={{marginTop:'12px',background:'green',border:'none',borderRadius:"5px",padding:'8px'}}>Sign up for a demo</button>
            </div>
            <div className="row-2 " style={{background:'black'}}>
                <div className="row container d-flex justify-content-center">

                    <div className="col-lg-4 mt-5 " >
                        <h2 className='text-light'><img src={logo} alt="" className='me-2'/>Nexcent</h2>
                        <p className='text-light mt-4 ms-3' style={{textAlign:'left'}}>Copyright © 2020 Nexcent ltd.</p>
                        <p className='text-light ms-3' style={{textAlign:'left'}}>All rights reserved</p>
                        <div className="social container mb-5 d-flex" style={{textAlign:'left'}}>
                            <img src={S1} alt="" className='me-2'/>
                            <img src={S2} alt="" className='me-2'/>
                            <img src={S3} alt="" className='me-2'/>
                            <img src={S4} alt="" className='me-2'/>
                        </div>
                    </div>

                    <div className="col-lg-2 mt-5 text-light">
                        <h3>Company</h3>
                        <p className='mt-3'>Blog</p>
                        <p>About us</p>
                        <p>Pricing</p>
                        <p>Testimonial</p>
                    </div>
                    <div className="col-lg-2 mt-5 text-light">
                        <h3>Support</h3>
                        <p className='mt-3'>Help center</p>
                        <p>Legal</p>
                        <p>Terms of service</p>
                        <p>Status</p>
                    </div>
                    <div className="col-lg-2 mt-5 text-light">
                        <h3>Contact Us</h3>
                        <p className='mt-3'>Help center</p>
                        <p>Legal</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer