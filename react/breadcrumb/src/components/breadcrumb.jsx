import React from 'react'
import {Link} from "react-router-dom";

export default function Breadcrumb({content, location}) {
  return (
    <div>
        <Link to={location + "/" + content}>{content}</Link>
    </div>
  )
}
