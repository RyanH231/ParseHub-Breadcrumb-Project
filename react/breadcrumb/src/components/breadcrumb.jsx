import React, {useState} from 'react'
import {Link} from "react-router-dom";

import "../css/breadcrumb.css"



export default function Breadcrumb({content, location}) {
    return (
        <div className='flex'>
            <Link  to={location + "/" + content}>{content}</Link>
        </div>
    )
  
}
