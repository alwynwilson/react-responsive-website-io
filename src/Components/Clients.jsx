import React from 'react'
import C1 from '../assets/clients/C1.png'
import C2 from '../assets/clients/C2.png'
import C3 from '../assets/clients/C3.png'
import C4 from '../assets/clients/C4.png'
import C5 from '../assets/clients/C5.png'
import C6 from '../assets/clients/C6.png'
import C7 from '../assets/clients/C7.png'
import M1 from '../assets/clients/M1.png'
import M2 from '../assets/clients/M2.png'
import M3 from '../assets/clients/M3.png'

function Clients() {
  return (
    <div className='container-fluid'> 
      <div className="container">
          <h3 className='text-center' style={{marginTop:'150px'}}>Manage your entire community in a single system</h3>
          <p className='text-center'>Who is Nextcent suitable for?</p>
          <div className="row d-flex">

            <div className="col-lg-4 text-center mt-5">
              <img src={M1} alt="" className="" />
              <h3 className='text-center' style={{marginTop:'50px'}}>Membership <br /> Organisations</h3>
              <p className='text-center'>We have been <br /> working with some <br /> Fortune 500+ clients</p>
            </div>

            <div className="col-lg-4 text-center mt-5">
              <img src={M2} alt="" className="" />
              <h3 className='text-center' style={{marginTop:'50px'}}>National <br /> Associations</h3>
              <p className='text-center'>Our membership management <br /> software provides full <br /> automation of membership <br /> renewals and payments</p>
            </div>

            <div className="col-lg-4 text-center mt-5">
              <img src={M3} alt="" className="" />
              <h3 className='text-center' style={{marginTop:'50px'}}>Clubs <br /> And Groups</h3>
              <p className='text-center'>Our membership management <br /> software provides full <br /> automation of membership <br /> renewals and payments</p>
            </div>
          </div>
        </div>

        <div className='container-fluid' style={{height:'450px',marginTop:'100px'}}>
          <h3 className='text-center' style={{marginTop:'150px'}}>Our Clients</h3>
          <p className='text-center'>We have been working with some Fortune 500+ clients</p>
          <div className="client-list row d-flex justify-content-center">
              <img src={C1} style={{width:'70px'}} className='m-3' alt="" />
              <img src={C2} style={{width:'70px'}} className='m-3' alt="" />
              <img src={C3} style={{width:'70px'}} className='m-3' alt="" />
              <img src={C4} style={{width:'70px'}} className='m-3' alt="" />
              <img src={C5} style={{width:'70px'}} className='m-3' alt="" />
              <img src={C6} style={{width:'70px'}} className='m-3' alt="" />
              <img src={C7} style={{width:'70px'}} className='m-3' alt="" />
          </div>
        </div>

        
    </div>

    
  )
}

export default Clients