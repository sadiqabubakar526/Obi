import React from 'react'
import {AiFillGithub , AiOutlineFundView , AiOutlineFolderView} from 'react-icons/ai'
const View= props => {
    return (
        <div>
           <div className="preview">
               <button className="btn-view" >Live Demo</button>

               <div className="line">
                    <h2 className="git_link"><AiFillGithub/></h2>

                   
               </div>
               <div className="stat">
                 <h6 >{props.stat}</h6>
                 <h6 style={{color:'rgba(156, 156, 9, 0.89)'}}>{props.cons}</h6>
                 <h6 style={{color:'rgba(18, 108, 224, 0.541)'}}>{props.open}</h6>
                 
               </div>
           </div>
        </div>
    )
}
export default View ;