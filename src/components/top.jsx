import React,{useState } from 'react';
import '../App.css'
import {HiMenuAlt3} from 'react-icons/hi'

const Top= props =>{
    let [show , setShow ]=useState('none')
    return(
        <div>
           <header>
               <div className="top">
                   <span>
                       <p>Logo</p>
                    </span>
                    <span class="nav">
                        <ul style={{color:'white'}}>
                            <li>{props.home}</li>
                            <li>{props.portfolio}</li>
                            <li>{props.contact}</li>
                        </ul>
                    </span>
                    <span className='menu'>
                        <h5 style={{cursor:'pointer'}}><h2> <HiMenuAlt3/></h2></h5>
                       
                    </span>
               </div>
           </header>
           <div className="sidebar" style={{display:show}}>
               <div className="child">
                   <ul style={{cursor:'pointer'}}>
                       <li>HOME</li>
                       <li>PORFOLIO</li>
                       <li>ABOUT</li>
                   </ul>
               </div>
           </div>
        </div>
    )
}
export default Top;