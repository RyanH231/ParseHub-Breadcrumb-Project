import React, {useEffect, useState} from 'react'
import {useLocation} from "react-router-dom";
import Breadcrumb from './breadcrumb';
import Path from './path';

export default function GetContents() {
    let location = useLocation();
    let isFile = true;

    const [path, setPath] = useState([]);
    const [fileContents, setFileContents] = useState([]);
    const [fileDescription, setFileDescription] = useState("");
    const [fileFlag, setFileFlag] = useState(false);
    const [currentLocation, setCurrentLocation] = useState("");
    
    useEffect(()=>
    {
        fetch("/api" + location.pathname).then(response => response.json()).then(data => {
            if(data.contents === undefined)
            {
                setFileContents([]);
            }
            else if(data.currentElement === 'dir')
            {
                setFileContents(data.contents);
                setFileFlag(false);
            }
            else if(data.currentElement === 'file')
            {
                setFileDescription(data.contents);
                setFileFlag(true);
            }
            setPath(data.breadcrumbPath);
            setCurrentLocation(location.pathname);
        })        
    }, [location])


    if(fileFlag)
    {
        return(<div>
            {path.map((_, index) => 
                    <Path key = {index} path = {path} index={index}/>
                )}
            <h1> {fileDescription}</h1>
            </div>
        )
    }
    else
    {
        
        return (
            <div>
                {path.map((_, index) => 
                    <Path key = {index} path = {path} index={index}/>
                )}
                {fileContents.map((file, index) => 
                    <Breadcrumb key= {index} content = {file} location = {currentLocation}/>
                )}
            </div>);
    }

}

