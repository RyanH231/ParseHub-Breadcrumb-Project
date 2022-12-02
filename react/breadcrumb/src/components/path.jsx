import React from 'react'
import {Link} from 'react-router-dom'

export default function Path({path, index}) {
  
  
  let stringPath = "/path/" + path.slice(0,index + 1).join('/');
  let current = path.at(index);

  if(path.length === index + 1)
  {
    return(<h5> {current}</h5>)
  }
  else
  {
    return(<div>
        <Link to={stringPath}>{current}</Link>
      </div>)
  }
  
}
