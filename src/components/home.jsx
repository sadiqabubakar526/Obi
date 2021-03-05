import React from 'react';
import Top from './top.jsx'
import Pro from '../assets/pro.jpg'
import {Link } from 'react-router-dom'
// import Port from './portfolio'
import {AiFillDribbbleCircle , AiFillBehanceSquare ,AiFillGithub, AiOutlineTwitter} from 'react-icons/ai'
const Home=()=>{
    
    return (
        <div>
        
                <Top home="HOME" portfolio="PORTFOLIO" contact="CONTACT" />
         

            {/* intro page */}
            <section className="flow">
              
                <div className="intro" >
                    
                         
                   
                    <div className="img">
                         <center>
                         <img src={Pro} alt="" className="prof"/>
                         </center>
                    </div>
                    {/* the bio aspect */}
                    <div className="bio">
                        <div className="content">
                            <h4>Ejeh Obiabo Immanuel</h4>
                            <center>   <span className="empty"></span></center>
                            <div className="author">
                            <p style={{textAlign:'center'}}>A UI/UX Designer | Web Developer  | App Developer .</p><p>    I simplify  the web and applicatio for you all i see in the world is designed and programmed. </p>
                            </div>
                        </div>
                    <center>
                    <div className="detailed">
                            <ul className='entail'>
                                <li><AiOutlineTwitter id="twitter" onClick={()=>window.location='https://twitter.com/yhoungdev'}/></li>
                                <li ><AiFillDribbbleCircle  id="dribbble" onClick={()=>window.location='https://dribbble.com/obiabo'} /></li>
                                <li><AiFillBehanceSquare id="behance" onClick={()=>window.location='https://behance.com/yhoungdev'} /></li>
                                <li ><AiFillGithub id="github" onClick={()=>window.location='https://github.com/yhoungdev'}/></li>
                               
                            </ul>
                        </div>
                    </center>
                        <center>
                        <div className="but">
                            <Link to='./Port'>
                             <button className="btn">EXPLORE</button>
                            </Link>
                        </div>
                        </center>

                    </div>


                </div>

            </section>

            
        </div>
    )
}
export  default Home
