import React from 'react';

function Header({title}){

    /*
    const validation = 2;
    let message

    if(validation >1){
        message = "Tienda Online"
    }
    else{
        message = ":/"
    }
    */

    return(
        <h1 className = "header">{title}</h1>
    )
}

export default Header