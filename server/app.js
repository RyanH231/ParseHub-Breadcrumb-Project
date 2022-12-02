const express = require('express');
const app = express();

const root = require('./directories.js');


const RoutePath = (subRoute) =>
{
    console.log("Here");

    

    let path = [];
    let startingElement = root;
    let foundElement = true;
    let pathIndex = 0;
    let directoryElements = [];
    let fileName = "";

   
    if(subRoute !== "")
    {
         path = subRoute.split('/');
        
    }
    //While the breadcrumb list is not invalid
    while(pathIndex !== path.length)
    {
        console.log("Here2");
        //Traversing to the current directory in the breadcrumb list
        if(startingElement.children[path[pathIndex]] !== undefined)
        {
            console.log("Here3");
            startingElement = startingElement.children[path[pathIndex]];
            pathIndex++;
        }
        //Element does not exist in the list
        else
        {    
            console.log("Here4");
            foundElement = false;
            break;
        }
    }

    

    if(foundElement === true)
    {
        console.log("Here5");
        //If the element is a directory, display its contents
        if(startingElement.type === "dir")
        {
            console.log("Here6");
            for(let key in startingElement.children)
            {
                directoryElements.push(key);
            }
            return({breadcrumbPath: path, 
                currentElement: startingElement.type, 
                contents: directoryElements });
        }
        //Display the name of the file
        if(startingElement.type === "file")
        {
            console.log("Here7");
            fileName = "THIS IS FILE: " + path[pathIndex - 1];
            return({breadcrumbPath: path, 
                currentElement: startingElement.type, 
                contents: fileName });
        }
       
    }
    else
        return({invalid : "Invalid path.", currentElement: 'file', contents: "Path is invalid."});
}

app.get('/api/path/*', (req,res) => {
    const subRoute = req.params[0];
    res.json(RoutePath(subRoute));
})

app.get('/api/path', (req,res) => {
    res.json(RoutePath(""));
})

app.get("/*", (req,res) =>{
    return({invalid : "Invalid path.", currentElement: 'file', contents: "Path is invalid."});
})
app.listen(5000, ()=>
{
    console.log("Express is connected!");
})