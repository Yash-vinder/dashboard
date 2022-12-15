import React from 'react'
import profilePicture from '../images/approved_profile.png';
import './Approved.css'

const Approved = () => {
  return (
    <>
    <div className='container mt-5'>
      <div className='row'>
      <div className="user-detail">
              <div className="user-icon">
               <img src={profilePicture} alt="" />
               <div className='user-name'>
                      <p>Name: </p>
                      <p>UserID: </p>
                      <p>Bug Report: </p>
                      <p>Remark: </p>
                      </div>
                  </div>   
                          <div className='user-prise'>
                            <div>
                            
                            </div>
                            <div className='price_bounty'><p>$229</p></div>
                            <div><button className='btn_view_bounty'>View Bounty</button></div>
                    </div>
                  </div>
      </div>
    </div>
    </>
  )
}

export default Approved
