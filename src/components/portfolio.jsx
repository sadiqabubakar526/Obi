import React from 'react';
import Top from './top'
import '../App.css'
import View from './prev';
const Port=()=>{
    return (

        <div>
         
             <Top home="HOME" portfolio="PORTFOLIO" contact="CONTACT"/>
           
          <div className="wrap-card">

          <div className="card">
              <div className="title">
                  <h6 className="project-title">MailDevo</h6>
              </div>
                <div className="card-item">
                    <span className='tell'>
                        <p>
                            A simple mailing service , which comes with a simple and well documented API
                        </p>
                    </span>
                </div>

                <div className="view-part">
                    <View stat="Completed"/>
                </div>
            </div>

            <div className="card">
              <div className="title">
                  <h6 className="project-title">BAALEN</h6>
              </div>
                <div className="card-item">
                    <span className='tell'>
                        <p>
                             A web application which aids learning , by giving you some learning resources 
                        </p>
                    </span>
                </div>

                <View stat="Completed"/>
            </div>

           

            <div className="card">
              <div className="title">
                  <h6 className="project-title">NOTFLIX</h6>
              </div>
                <div className="card-item">
                    <span className='tell'>
                        <p>
                            NetFlix Desktop version clone 
                            Desktop ( Desktop view ) version for Netflix website 
                        </p>
                
                    </span>
                </div>

                <View stat="Completed"/>
            </div>

            <div className="card">
              <div className="title">
                  <h6 className="project-title">O'CART</h6>
              </div>
                <div className="card-item">
                    <span className='tell'>
                        <p>
                            Demo of a simple carting app for desktop view ( Desktop version )
                        </p>
                    </span>
                </div>
                <View cons="under-construction"  />
            </div>

        

          </div>

            {/* other flex part */}
            <br/>

            <div className="wrap-card" >

            <div className="card">
              <div className="title">
                  <h6 className="project-title">GROWYN</h6>
              </div>
                <div className="card-item">
                    <span className='tell'>
                        <p>
                            Grow your social media account by getting more followers with just a simple click
                        </p>
                    </span>
                </div>

                <View stat="Completed"/>
               
            </div>

            <div className="card">
              <div className="title">
                  <h6 className="project-title">COVID-19 TRACKER</h6>
              </div>
                <div className="card-item">
                    <span className='tell'>
                        <p>
                            Simple covid-19 tracker for all countries ,
                            shows the rate and cases of covid 19 in a particular country 
                        </p>
                    </span>
                </div>

                <View stat="Completed"/>
            </div>

            <div className="card">
              <div className="title">
                  <h6 className="project-title">CODE4MOM.js</h6>
              </div>
                <div className="card-item">
                    <span className='tell'>
                        <p>
                            A small Javascript Library for DOM manipulation , which has made accessing the Dom easy 
                        </p>
                    </span>
                </div>

                <View open="open source"/>
            </div>

            <div className="card">
              <div className="title">
                  <h6 className="project-title">INSTACLONE</h6>
              </div>
                <div className="card-item">
                    <span className='tell'>
                        <p>
                        Instagram profile page clone , just for fun and have the feel of insta 
                        </p>
                    </span>
                </div>

                <View stat="Completed"/>
            </div>

            </div>

        </div>
    )
}
export default Port;