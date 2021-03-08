import React,{useState } from 'react';
import '../App.css'
import {HiMenuAlt3} from 'react-icons/hi';
import {Link} from 'react-router-dom';
import Port from './portfolio';
import Home from './home';

const Top= props =>{
    let [show , setShow ]=useState('none')
    return(
        <div>
           <header>
               <div className="top">
                   <span>
                       <h5 className="african" >I am African !Black</h5 >
                    </span>
                    <span class="nav">
                        <ul style={{color:'white'}}>
                            <Link to="/"><li>{props.home}</li></Link>
                            <Link to='/Port'> <li>{props.portfolio}</li></Link>
                            <Link to="/"> <li>{props.contact}</li></Link>
                        </ul>
                    </span>
                    <span className='menu'>
                        <h2 style={{cursor:'pointer'}} onClick={()=>setShow('block')}> <HiMenuAlt3/></h2>
                       
                    </span>
               </div>
           </header>
           <div className="sidebar" style={{display:show}}>
              
               <div className="child">
               <h1 onClick={()=>setShow('none')}>&times;</h1>
                   <ul style={{cursor:'pointer'}}>
                       <li><Link to="/">HOME</Link></li>
                       <li><Link to="Port">PORFOLIO</Link></li>
                       <li>ABOUT</li>
                   </ul>
               </div>
           </div>
        </div>
    )
}
export default Top;